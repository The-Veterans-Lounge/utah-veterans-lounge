// export default async function handler(req, res) {
//   res.status(200).json({ status: "ok", timestamp: Date.now() });
// }
import { getEnv } from "@/lib/services";

export async function GET() {
  const env = getEnv();
  return Response.json({
    envVars: env,
    status: "ok",
    timestamp: Date.now(),
  });
}
