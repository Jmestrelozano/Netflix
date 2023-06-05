import { signOut } from "next-auth/react";

import { Navbar } from "@/components/navbar/Navbar";
import { Billboard } from "@/components/header/Billboard";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
