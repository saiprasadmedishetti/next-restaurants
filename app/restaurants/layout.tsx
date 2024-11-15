import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="container mx-auto p-5">{children}</main>
    </>
  );
}
