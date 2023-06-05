import { signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <>
      <h1>Netflix</h1>

      <button
        className="w-full rounded-md outline-none border-none bg-white"
        onClick={() => signOut()}
      >
        Salir
      </button>
    </>
  );
}
