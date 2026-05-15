"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SiteNext() {
  const { user } = useAuthContext();
  const router = useRouter();

  if (user) {
    router.replace("/home");
  } else {
    router.replace("/login");
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
