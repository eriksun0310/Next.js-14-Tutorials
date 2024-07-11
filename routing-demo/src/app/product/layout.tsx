
export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1 style={{
      background:'lightGreen'
    }}>Product Layout</h1>
    {children}
    </>
  );
}
