import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
      const { email, password } = await request.json();
      
      
    return NextResponse.json({ message: "Success", email,password});
  } catch (e) {
      console.error("Error in API:", e);
      return NextResponse.json({ message: "Authenticet Failed",e});
      
  }
}
