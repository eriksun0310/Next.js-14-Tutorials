import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/product">Product</Link>
      </div>
      <div>
        <Link href=" auth/register">Register</Link>
      </div>
    </div>
  );
}
