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
            <div className="ContainerCabecalhoFuncionalidades">

              <button
              className="BtnCabecalho"
              onClick={() => navegar("/")}>
                Início </button> 
            
            <button
              className="BtnCabecalho"
              onClick={() => navegar("/sobre")}
            >
                Sobre nós
            </button>
            <button
              className="BtnCabecalho"
              onClick={() => navegar("/calcular")}
            >
                Calcular emissão
            </button>
            </div>
            <div className="CabecalhoIntegrantes">
            <button
              className="BtnIntegrantes"
              onClick={() => navegar("/integrantes")}
            >
                Integrantes
            </button>
            </div>
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
