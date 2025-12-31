import { NextResponse } from "next/server";
import { now, formattedTime, formatUptime } from "@/lib/utils/time";

export async function GET() {
    return NextResponse.json({
        status: "ok",
        timestamp: now.toISOString(),
        localTime: formattedTime,
        uptime: formatUptime(process.uptime())
    })
}
  