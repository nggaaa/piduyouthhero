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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum,
          nemo sit molestiae dolor consequuntur, ducimus distinctio fugiat
          corrupti, nulla error commodi ea rerum eligendi perferendis quae
          quaerat ab consectetur.
        </p>
        <Button onClick={() => signIn("google")}>Let&lsquo;s Go</Button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    // console.log("Logged In");
    return { redirect: { destination: "/app" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
