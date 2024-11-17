"use client"
import BgInicial from "@/components/BgInicial/BgInicial";
import { useEffect } from "react";

export default function Home() {

  useEffect (() => {
    document.title = "Home"
  }, []);

  return (
    <>
    <BgInicial/>
    </> 
  );
}
