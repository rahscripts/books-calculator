"use server";

import { auth } from "@/auth";
import clientPromise from "@/lib/mongodb";

export async function getSession() {
    return await auth();
}

export type Book = {
    id: string;        // Unique local ID
    googleId: string;  // API ID to check duplicates
    title: string;
    authors: string[];
    cover: string;
    pageCount: number;
    currentPage: number;
};

export async function updateUsername(username: string) {
    const session = await auth();
    if (!session?.user?.email) {
        throw new Error("Not authenticated");
    }

    const client = await clientPromise;
    const db = client.db();

    // Check uniqueness (exclude current user)
    const existing = await db.collection("users").findOne({
        username: username,
        email: { $ne: session.user.email }
    });

    if (existing) {
        return { error: "Username already taken" };
    }

    // Update user
    await db.collection("users").updateOne(
        { email: session.user.email },
        { $set: { username: username } }
    );

    return { success: true };
}

export async function getUsername() {
    const session = await auth();
    if (!session?.user?.email) return null;

    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection("users").findOne({ email: session.user.email });
    return user?.username;
}
export async function syncBooks(books: Book[]) {
    const session = await auth();
    if (!session?.user?.email) {
        throw new Error("Not authenticated");
    }

    const client = await clientPromise;
    const db = client.db();

    // We store books directly on the user object for simplicity.
    await db.collection("users").updateOne(
        { email: session.user.email },
        { $set: { books: books } }
    );

    return { success: true };
}

export async function getPublicProfile(username: string) {
    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("users").findOne(
        { username: username },
        { projection: { username: 1, books: 1, name: 1, image: 1 } }
    );

    if (!user) return null;

    return {
        username: user.username,
        name: user.name,
        image: user.image,
        books: (user.books || []) as Book[]
    };
}

export async function getUserSettings() {
    const session = await auth();
    if (!session?.user?.email) return null;

    const client = await clientPromise;
    const db = client.db();

    // Explicitly fetching the user to get the username and books to hydrate client
    const user = await db.collection("users").findOne({ email: session.user.email });
    return user ? { username: user.username, books: user.books } : null;
}
