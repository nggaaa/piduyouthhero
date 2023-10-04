import { ReactNode, useEffect } from "react";
import Header from "./Header";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AppLayout({ children, ...props }) {
  const router = useRouter();
  const { data, status } = useSession();
  useEffect(() => {
    if (status == "unauthenticated") router.push("/signin");
  }, [data, router, status]);

  return (
    <div {...props} className="p-6">
      <Header />
      {children}
      <p className="text-center mt-10">
        &copy; {new Date().getFullYear()} by Bodacious
      </p>
    </div>
  );
}
