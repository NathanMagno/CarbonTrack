"use client";
import { useState } from "react";
import TabelaPegadaCarbono from "../TabelaPegadaCarbono/TabelaPegadaCarbono";

export default function FormularioCalculo() {
  const [formData, setFormData] = useState({
    consumoEletricidade: 0,
    tipoEnergia: "não-renovável",
    consumoGas: 0,
  });

  const [resultado, setResultado] = useState<string | null>(null);

  const fatoresEmissao = {
    eletricidade: 0.85,
    gas: 1.88,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emissaoEletricidade = formData.consumoEletricidade * fatoresEmissao.eletricidade;
    const emissaoGas = formData.consumoGas * fatoresEmissao.gas;

    const totalCO2 = emissaoEletricidade + emissaoGas;

    setResultado(`Sua pegada de carbono é ${totalCO2.toFixed(2)} kgCO₂ por mês.`);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8 p-5">

      <div className="flex flex-col items-center w-full lg:w-1/2 text-center gap-6 lg:mb-0">
        <form onSubmit={handleSubmit} className="bg-primary p-5 rounded-lg shadow-md w-full max-w-2xl lg:px-8 lg:py-8">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              id="consumo_eletricidade"
              value={formData.consumoEletricidade}
              onChange={(e) =>
                setFormData({ ...formData, consumoEletricidade: parseFloat(e.target.value) })
              }
              inputMode="numeric"
              className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none"
              required
            />
            <label
              htmlFor="consumo_eletricidade"
              className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600"
            >
              Consumo de eletricidade (kWh)
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              id="consumo_gas"
              value={formData.consumoGas}
              onChange={(e) =>
                setFormData({ ...formData, consumoGas: parseFloat(e.target.value) })
              }
              inputMode="numeric"
              className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none"
              required
            />
            <label
              htmlFor="consumo_gas"
              className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600"
            >
              Consumo de gás (m³)
            </label>
          </div>

          <button type="submit" className="Botao w-full">
            Calcular
          </button>
        </form>

        {resultado && (
          <div className="mt-5 text-lg text-secondary absolute translate-y-60">
            <p>{resultado}</p>
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/2 mobile:pt-24 lg:pt-0">
        <TabelaPegadaCarbono />
      </div>
    </div>
  );
}
