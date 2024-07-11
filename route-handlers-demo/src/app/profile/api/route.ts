import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // 取得 http header
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  // 設定cookie
  cookies().set("resultPerPage", "20");
  //取得cookie
  const theme = request.cookies.get("theme");

  //   console.log(requestHeaders.get("Authorization"));
  //   console.log(headerList.get("Authorization"));

  console.log("theme", theme);
  //取得cookie
  console.log(cookies().get("resultPerPage"));
  return new Response("<h1>Profile Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", // 設定cookie
    },
  });
}
