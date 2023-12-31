"use client";
import Image from "next/image";

import { useSession, signOut, signIn } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <main className="">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="w-44 h-44 relative mb-4">
            <Image
              src={session.user?.image}
              fill
              alt=""
              className="object-cover rounded-full"
            />
          </div>
          <p className="text-2xl mb-2">
            Welcome <span className="font-bold">{session.user?.name}</span>.
            Signed In As
          </p>
          <p className="font-bold mb-4">{session.user?.email}</p>
          <button
            className="bg-red-600 py-2 px-6 rounded-md"
            onClick={() => signOut({callbackUrl: '/'})}
          >
            Sign out
          </button>
        </div>
      </main>
    );
  }
}
