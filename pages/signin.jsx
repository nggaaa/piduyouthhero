import { signIn, getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Button from "@/components/Button";

export default function SignIn() {
  return (
    <div className="px-8 pt-32">
      <div className="w-full">
        <h1 className="font-bold text-2xl text-primary">Login</h1>
        <p>
          Selamat datang di aplikasi Pidu Youth Hero! Aplikasi ini akan
          membantumu dalam menghadapi segala gangguan psikologi. Terima kasih
          telah memilih kami sebagai teman digital kamu. Selamat menjelajahi!
        </p>
        <Button onClick={() => signIn("google")}>Let&lsquo;s Go</Button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/app" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
