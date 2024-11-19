"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {

    if (status === "loading") {
      return; 
    }

    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router]);

  if (status === "unauthenticated" || status === "loading") {
    return null; 
  }

  return (<>
  {children}
  </>
  )
}
