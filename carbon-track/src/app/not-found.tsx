"use client"
import { useEffect } from "react";
import "./styles/not-found.css"

export default function Error404() {

  useEffect (() => {
    document.title = "404 Not Found";
  }, []);


  return (
    <>  
    <div  className="ContainerNotFound">
      <main>
        <div className="ContainerMsgNotFound">
        <h1 className="titulo404">404 - Página Não Encontrada</h1>
          <p className="info404">Desculpe, a página que você está procurando não existe.</p>
        </div>
      </main>
    </div>
    </>
  );
}