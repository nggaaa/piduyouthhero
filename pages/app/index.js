import AppLayout from "@/components/Layouts/AppLayout";
import Card from "@/components/Card";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function Home() {
  return (
    <AppLayout>
      <div className="w-full pt-12">
        <Card className="text-center">
          <p className="text-justify text-sm">Sesok Libur</p>
        </Card>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Link href="/app/mood">
            <Card className="w-auto flex justify-center">Moodtracker</Card>
          </Link>
          <Link href="  /app/test">
            <Card className="w-auto flex justify-center">Test</Card>
          </Link>
        </div>
        <Card className="w-auto flex flex-col justify-center">
          <h1 className="text-center">Catatan Mood</h1>
          {/* <MoodChart uid={user?.firebaseId} /> */}
        </Card>
      </div>
    </AppLayout>
  );
}
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (!session) {
    return { redirect: { destination: "/signin" } };
  }
  return {
    props: {},
  };
}
