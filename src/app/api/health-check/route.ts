// export default async function handler(req, res) {
//   res.status(200).json({ status: "ok", timestamp: Date.now() });
// }
import { getEnv } from "@/lib/services";

export async function GET() {
  const env = getEnv();
  
  // Test external API connectivity
  let externalApiTest: { status: string; error: string | null } = { status: "unknown", error: null };
  try {
    const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogData = await dogResponse.json() as { status?: string };
    externalApiTest = { status: dogData.status === "success" ? "ok" : "failed", error: null };
  } catch (fetchError) {
    externalApiTest = { status: "failed", error: fetchError instanceof Error ? fetchError.message : "Unknown error" };
  }
  
  return Response.json({
    envVars: env,
    externalApiTest,
    status: "ok",
    timestamp: Date.now(),
  });
}
