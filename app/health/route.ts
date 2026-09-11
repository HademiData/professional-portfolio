import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "professional-portfolio",
    timestamp: new Date().toISOString(),
  });
}
