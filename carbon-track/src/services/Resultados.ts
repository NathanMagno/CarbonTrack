import Resultado from "./types";

export async function getResultados() {
    const promise = await fetch("http://localhost:8080/resultados");
    return promise.json();
}

export async function getResultadoByid(id: number) {
    const promise = await fetch(`http://localhost:8080/resultados/${id}`); 
    return promise.json();
}

export async function novoResultado(objetoResultado: Omit<Resultado, "idResultado" | "dataCalculo">) {
    const promise = await fetch("http://localhost:8080/resultados/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoResultado),
    });
  
    if (!promise.ok) {
      throw new Error(`Erro: ${promise.status}`);
    }
  
    return promise.json();
  }
  

export async function atualizarResultado(id: number, objetoResultado: Resultado) {
    const promise = await fetch(`http://localhost:8080/resultados/${id}`, { 
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoResultado),
    });

    if (!promise.ok) {
        throw new Error(`Erro: ${promise.status}`); 
    }

    return promise.json();
}

export async function deletarResultado(id: number) {
    const promise = await fetch(`http://localhost:8080/resultados/${id}`, { 
        method: "DELETE",
        mode: "cors",
    });

    if (!promise.ok) {
        throw new Error(`Erro: ${promise.status}`);
    }

    return true;
}
