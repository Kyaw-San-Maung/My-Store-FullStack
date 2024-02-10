import { query } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const sql = "select * from products order by Id desc";
  const result = await query(sql, "");

  try {
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
