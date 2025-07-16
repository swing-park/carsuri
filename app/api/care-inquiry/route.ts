import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // localhost:4000/care-inquiry로 프록시 요청
    const response = await fetch("https://api-v2.gongcarapp.com/partner-company/care-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "External API request failed" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("API 프록시 오류:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
