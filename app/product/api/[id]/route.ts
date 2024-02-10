import { query } from "@/app/db";

import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const sql = "Delete from products where id = ?";

  try {
    const data = await query(sql, [id]);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}

//Read From Single Product
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log("This is Geting Data Page");
  console.log("This is Id " + id);

  const sql = `select * from products where id = ?`;

  try {
    const result = await query(sql, [id]);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
