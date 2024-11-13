"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Menu from "@/icons/menu-100x100.png";


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
      <header className="Cabecalho">
        <div className="ContainerCabecalho">
          <nav className="NavCabecalho">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:outline-none"
              onClick={() => navegar("/")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Início
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:outline-none"
              onClick={() => navegar("/sobre")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sobre nós
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:outline-none"
              onClick={() => navegar("/servicos")}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Calcular emissão
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-secondary group-hover:from-green-400 group-hover:to-secondary hover:text-black dark:text-white focus:outline-none"
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
        <div className="ContainerMobile">
          <div className="MenuContainer">
            <span
              onClick={() => navegar("/")}
              className="ItensCabecalhoMobile"
            >
              Início
            </span>
            <span
              onClick={() => navegar("/sobre")}
              className="ItensCabecalhoMobile"
            >
              Sobre
            </span>
            <span
              onClick={() => navegar("/servicos")}
              className="ItensCabecalhoMobile"
            >
              Calcular emissão
            </span>
            <span
              onClick={() => navegar("/contato")}
              className="ItensCabecalhoMobile"
            >
              Integrantes
            </span>
          </div>
        </div>
      )}
    </>
  );
}
