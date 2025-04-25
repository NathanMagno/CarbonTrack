"use client";
import { getResultados, deletarResultado } from "@/services/Resultados";
import Resultado from "@/services/types";
import { useEffect, useState } from "react";

export default function Resultados() {
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchResultados();
  }, []);

  async function fetchResultados() {
    try {
      const promise = await getResultados();
      setResultados(promise);
    } catch (e) {
      setError("Erro ao buscar resultados");
      console.log(e);
    }
  }

  async function handleDelete(id: number) {
    try {
      await deletarResultado(id);
      setResultados((at) =>
        at.filter((resultado) => resultado.idResultado !== id)
      );
    } catch (e) {
      setError("Erro ao excluir resultado.");
      console.log(e);
    }
  }

  if (resultados.length == 0 && !error) {
    return (
      <div className="p-4 bg-gray-100 rounded-md shadow-md mt-10">
        <p className="text-center text-gray-500">
          Nenhum resultado encontrado 🥲
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-600 rounded-md shadow-md mt-10 ">
        <p className="text-center text-white">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4  rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-fiap">Resultados</h2>
      <ul className="space-y-4">
        {resultados.map(
          ({
            idResultado,
            gastoLuz,
            gastoGas,
            resultadoCalculo,
            dataCalculo,
          }) => (
            <li
              key={idResultado}
              className="flex flex-col bg-primary p-4 rounded-md shadow-sm border "
            >
              <p className="text-white">
                <strong className="text-secondary">Gasto de Luz:</strong>{" "}
                {gastoLuz}
              </p>
              <p className="text-white">
                <strong className="text-secondary">Gasto de Gás:</strong>{" "}
                {gastoGas}
              </p>
              <p className="text-white">
                <strong className="text-secondary">
                  Resultado do Cálculo:
                </strong>{" "}
                {resultadoCalculo}
              </p>
              <p className="text-white">
                <strong className="text-secondary">Data do Cálculo:</strong>{" "}
                {new Date(dataCalculo).toLocaleDateString()}
              </p>
              <div className="mt-4 flex justify-center space-x-10">
                <button
                  onClick={() => handleDelete(idResultado)}
                  className="Botao"
                >
                  Excluir
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
