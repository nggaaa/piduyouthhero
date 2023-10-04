import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Image from "next/image";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { data } = useSession();
  async function clickLogout() {
    Swal.fire({
      title: "Yakin?",
      text: "Yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#475569",
      confirmButtonText: "Logout!",
      cancelButtonText: "Jangan",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
      }
    });
  }
  if (usePathname() != "/app/test")
    return (
      <header className="w-full flex justify-between items-center overflow-hidden">
        <h2 className="font-semibold">Pidu Youth Hero</h2>

        <button onClick={() => setMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        {menu && (
          <div className="w-2/3 p-6 right-0 top-0 bg-white h-screen fixed shadow-[-200px_0px_5px_200px_rgba(0,0,0,0.5)] z-10">
            <div className="w-full flex justify-end">
              <button onClick={() => setMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="border-1 my-2 border-black" />
            <div className="w-full pt-4">
              <ul className="w-full space-y-3">
                <li className="w-full block border-b-2">
                  <Link className="w-full block text-xl" href="/app">
                    Home
                  </Link>
                </li>
                <li className="w-full block border-b-2">
                  <Link className="w-full block text-xl" href="/app/mood">
                    Mood Track
                  </Link>
                </li>
                <li className="w-full block border-b-2">
                  <button
                    type="button"
                    onClick={clickLogout}
                    className="w-full block text-left text-red-500 text-xl"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    );
  else {
    return <></>;
  }
}
