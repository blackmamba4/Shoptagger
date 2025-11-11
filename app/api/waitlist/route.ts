import { NextRequest, NextResponse } from "next/server";

const loopsFormId = "cmhjq89y909kfzp0im2mnf4z1";
const loopsEndpoint = `https://app.loops.so/api/newsletter-form/${loopsFormId}`;

export async function POST(req: NextRequest) {
  try {
    const incoming = await req.formData();
    const formData = new URLSearchParams();

    incoming.forEach((value, key) => {
      if (typeof value === "string") {
        formData.append(key, value);
      }
    });

    const response = await fetch(loopsEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    const text = await response.text();

    let payload: { success?: boolean; message?: string } | null = null;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      return NextResponse.json(payload ?? { success: false }, {
        status: response.status
      });
    }

    return NextResponse.json(payload ?? { success: true });
  } catch (error) {
    console.error("Waitlist proxy failed", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit waitlist form right now." },
      { status: 500 }
    );
  }
}
