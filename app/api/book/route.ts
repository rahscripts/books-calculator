import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("intitle");

    if (!title) {
      return NextResponse.json(
        { error: "Missing book title" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BOOK_API;

    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=4&printType=books&langRestrict=en&key=${apiKey}`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Google Books API failed" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(
      { items: data.items || [] },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
