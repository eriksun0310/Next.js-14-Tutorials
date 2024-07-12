import { cookies } from "next/headers";
// server component

// Dynamic Rendering: 服務器渲染策略,如果有使用(cookie、URL、search parameters)
export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About server component");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
