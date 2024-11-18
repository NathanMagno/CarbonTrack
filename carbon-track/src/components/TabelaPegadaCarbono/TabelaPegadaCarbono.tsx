export default function TabelaPegadaCarbono() {
  return (
    <div className="max-w-full sm:max-w-md mx-auto mt-8 p-5 bg-primary text-secondary rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Classificação da Pegada de Carbono</h2>
      
      <div className="overflow-x-auto"> {/* Adiciona a rolagem horizontal */}
        <table className="min-w-full bg-gray-900 border border-gray-900 rounded-lg mobile:text-[10px] lg:text-[16px]">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-900 text-left font-semibold">Classificação</th>
              <th className="py-3 px-4 bg-gray-900 text-left font-semibold">Emissão de CO₂ (kgCO₂/mês)</th>
              <th className="py-3 px-4 bg-gray-900 text-left font-semibold">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-3 px-4 text-secondary font-medium">Baixa</td>
              <td className="py-3 px-4 text-secondary">100 - 300</td>
              <td className="py-3 px-4">Consumo eficiente com energia renovável ou pouca utilização de gás e eletricidade.</td>
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
    </div>
  );
}
