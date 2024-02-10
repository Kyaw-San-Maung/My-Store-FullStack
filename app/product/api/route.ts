import { query } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: any) {
  const sql = "select * from products order by Id desc";
  const result = await query(sql, "");

  try {
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const sql = "insert into products(Name, BuyPrice, SellPrice) values(?,?,?)";

  const values = [
    data.get("name" || ""),
    data.get("buyPrice" || ""),
    data.get("sellPrice" || ""),
  ];

  try {
    await query(sql, values);

    return NextResponse.json({
      message: "Successfully created",
      status: "success",
    });
  } catch (error) {
    console.error("error : ", error);
    return NextResponse.json(
      { message: "Error Processing creation", error },
      { status: 500 }
    );
  }
}
