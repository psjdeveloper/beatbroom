import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) return NextResponse.json({ error: "Missing query" });

  const res = await fetch(`https://api.deezer.com/search?q=${query}`);
  const data = await res.json();

  return NextResponse.json(data);
}
