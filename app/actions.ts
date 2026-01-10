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

export async function checkUsernameAvailability(username: string) {
    if (!username || username.length < 3) return { available: false, error: "Too short" };

    // Alphanumeric + underscores only
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { available: false, error: "Invalid characters" };
    }

    const client = await clientPromise;
    const db = client.db();

    const existing = await db.collection("users").findOne({
        username: { $regex: new RegExp(`^${username}$`, 'i') } // Case insensitive check
    });

    return { available: !existing };
}

export async function updateProfile(data: { username?: string; name?: string; image?: string }) {
    const session = await auth();
    if (!session?.user?.email) {
        throw new Error("Not authenticated");
    }

    const client = await clientPromise;
    const db = client.db();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateDoc: any = {};

    // Username check
    if (data.username) {
        const existing = await db.collection("users").findOne({
            username: data.username,
            email: { $ne: session.user.email }
        });
        if (existing) return { error: "Username already taken" };
        updateDoc.username = data.username;
    }

    if (data.name) updateDoc.name = data.name;
    if (data.image) updateDoc.image = data.image;

    if (Object.keys(updateDoc).length === 0) return { success: true };

    await db.collection("users").updateOne(
        { email: session.user.email },
        { $set: updateDoc }
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
    return user ? {
        username: user.username,
        books: user.books,
        name: user.name || session.user.name,
        image: user.image || session.user.image
    } : null;
}
