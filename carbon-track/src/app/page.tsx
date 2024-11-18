
import BgInicial from "@/components/BgInicial/BgInicial";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {


  return (
    <>
      <BgInicial />
    </>
  );
}
