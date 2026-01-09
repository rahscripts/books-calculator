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
    
    // Construct URL carefully. If no API key is present, it might still work 
    // for public data but with lower rate limits.
    const keyParam = apiKey ? `&key=${apiKey}` : "";
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}&maxResults=5&printType=books&langRestrict=en${keyParam}`;

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
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}