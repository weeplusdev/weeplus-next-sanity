import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET(req: Request) {
  return await auth(req);
}

export async function POST(req: Request) {
  return await auth(req);
}