'use client'

import { supabase } from "@/utils/supabaseClient";
import { Session } from "@supabase/auth-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        // router.push('/auth'); // Redirect to login if no session
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    supabase.auth.signOut()
    // router.push('/auth'); // Redirect to login after logout
  }
  console.log("session is the :", session);
  return (
    <>
      <div>
        <h1>Main Page</h1>
        {session ? (
          <div>
            <p>Welcome {session.user.email}!</p>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        ) : (
          <div>
            <p>You are not logged in!</p>
            <button className="bg-primary px-2 py-1 rounded-md" onClick={() => router.push('/auth')}>Login</button>
          </div>
        )}
      </div>
    </>
  );
}
