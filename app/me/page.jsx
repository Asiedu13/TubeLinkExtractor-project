"use client";
import { useRouter } from "next/navigation";

import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function Page() {
  const [user] = useAuthState( auth );
  const [signOut] = useSignOut( auth );
  const router = useRouter();
  const userSession = sessionStorage.getItem( 'user' );

  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      sessionStorage.removeItem("user", false);
    } catch (e) {
      console.log(`Er ${e}`);
    }
  }; 
  if (!user && !userSession) {
    console.log( user );
    router.push("/login");
  }
else {
  return (
    <main className="">
      This is the user dashboard page
      <div>some</div>
      <div onClick={handleSignOut}>
        Logout
      </div>
    </main>
  );
}
}
