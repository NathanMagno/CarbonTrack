"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Menu from "@/icons/menu-100x100.png";
import "@/app/styles/inicial.css"

export default function Cabecalho() {
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);

  const navegar = (destino: string) => {
    router.push(destino);
    setMenuAberto(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (menuAberto && target && !target.closest(".menu-container")) {
        setMenuAberto(false);
      }
    };

    if (menuAberto) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAberto]);

  return (
    <>
      <header className="block hidden xl:flex bg-primary text-white w-full p-4">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="flex space-x-6">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={() => navegar("/")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Início
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={() => navegar("/sobre")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sobre nós
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={() => navegar("/servicos")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Calcular emissão
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={() => navegar("/contato")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Integrantes
              </span>
            </button>
          </nav>
        </div>
      </header>

      <div className="xl:hidden fixed top-4 right-4 z-50">
        <div className="rounded-full bg-primary p-1">
          <Image
            alt="Menu"
            src={Menu}
            width={40}
            onClick={() => setMenuAberto(!menuAberto)}
          />
        </div>
      </div>

      {menuAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-40">
          <div className="MenuContainer">
            <span
              onClick={() => navegar("/")}
              className="block hover:underline cursor-pointer"
            >
              Início
            </span>
            <span
              onClick={() => navegar("/sobre")}
              className="block hover:underline cursor-pointer"
            >
              Sobre
            </span>
            <span
              onClick={() => navegar("/servicos")}
              className="block hover:underline cursor-pointer"
            >
              Calcular emissão
            </span>
            <span
              onClick={() => navegar("/contato")}
              className="block hover:underline cursor-pointer"
            >
              Integrantes
            </span>
          </div>
        </div>
      )}
    </>
  );
}
