// export default async function handler(req, res) {
//   res.status(200).json({ status: "ok", timestamp: Date.now() });
// }

import { NextResponse } from "next/server";

export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: Date.now(),
  });
}
