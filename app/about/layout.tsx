import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <nav>{"About's Nav"}</nav>
        {children}
      </main>
    </>
  );
}
