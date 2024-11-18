

export default function TabelaPegadaCarbono() {
  return (
    <div className="max-w-md mx-auto mt-8 p-5 bg-primary text-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Classificação da Pegada de Carbono</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-100 text-left font-semibold TabelaPegadaCarbono">Classificação</th>
            <th className="py-3 px-4 bg-gray-100 text-left font-semibold TabelaPegadaCarbono">Emissão de CO₂ (kgCO₂/mês)</th>
            <th className="py-3 px-4 bg-gray-100 text-left font-semibold TabelaPegadaCarbono">Descrição</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-t">
            <td className="py-3 px-4 text-secondary font-medium">Baixa</td>
            <td className="py-3 px-4 text-secondary">100 - 300</td>
            <td className="py-3 px-4 TabelaPegadaCarbono">Consumo eficiente com energia renovável ou pouca utilização de gás e eletricidade.</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 px-4 text-secondary font-medium">Moderada</td>
            <td className="py-3 px-4 text-secondary">300 - 600</td>
            <td className="py-3 px-4 text-secondary">Consumo médio com medidas razoáveis de economia de energia.</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 px-4 text-secondary font-medium">Alta</td>
            <td className="py-3 px-4 text-secondary">&gt; 600</td>
            <td className="py-3 px-4 text-secondary">Elevado consumo de energia e pouca eficiência energética.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

