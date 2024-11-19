
import BgInicial from "@/components/BgInicial/BgInicial";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function Home() {
  const session = await getServerSession();

  if (!session)
  {
    return redirect('/login');
  }

  return (
    <>
      <BgInicial />
    </>
  );
}
