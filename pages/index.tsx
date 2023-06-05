import { signOut } from "next-auth/react";

import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
    </>
  );
}
