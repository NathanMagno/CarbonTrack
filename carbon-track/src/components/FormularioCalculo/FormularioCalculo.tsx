"use client";
import { useState } from "react";

function FormularioCalculo() {
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
    <div className="max-w-md mx-auto p-5">
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            id="consumo_eletricidade"
            value={formData.consumoEletricidade}
            onChange={(e) =>
              setFormData({ ...formData, consumoEletricidade: parseFloat(e.target.value) })
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="consumo_eletricidade"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600"
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
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="consumo_gas"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-focus:text-blue-600"
          >
            Consumo de gás (m³)
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calcular
        </button>
      </form>


      {resultado && (
        <div className="mt-5 text-lg text-gray-700">
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default FormularioCalculo;
