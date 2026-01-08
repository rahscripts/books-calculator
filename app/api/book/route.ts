import { NextResponse } from "next/server";




export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const title = searchParams.get("intitle");

    if (!title) {
      return NextResponse.json(
        { error: "Book title is required" },
        { status: 400 }
      );
    }
    
    const apiKey = process.env.BOOK_API;

    const url =
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=1&key=${apiKey}
`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Google API error", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    const pageCount =
      data.items?.[0]?.volumeInfo?.pageCount ?? null;

    return NextResponse.json({
      pageCount,
    }, {status: 200});
  } catch (err) {
    return NextResponse.json(
      { error: "Server failed" },
      { status: 500 }
    );
  }
}
