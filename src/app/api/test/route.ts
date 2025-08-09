import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();
    return NextResponse.json({
      message: "CORS proxy working!",
      data: data,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    // WORK IN PROGRESS //

    // if (e instanceof Error) {
    //   return Response.json({
    //     error: "Proxy failed",
    //     details: e.message,
    //   });
    // } else {
    //   console.error("Caught an unknown type of error:", e);
    //   return Response.json({
    //     error: "Proxy failed",
    //     details: e,
    //   });
    // }
    return NextResponse.json({
      error: "Proxy failed",
      details: "Error",
    });
  }
}
