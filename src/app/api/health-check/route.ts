// export default async function handler(req, res) {
//   res.status(200).json({ status: "ok", timestamp: Date.now() });
// }


export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: Date.now(),
  });
}
