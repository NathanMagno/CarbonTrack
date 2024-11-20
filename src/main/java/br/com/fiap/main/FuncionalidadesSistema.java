package br.com.fiap.main;

import javax.swing.JOptionPane;

import br.com.fiap.beans.RegioesSustentaveis;
import br.com.fiap.beans.RelatorioCarbono;

public class FuncionalidadesSistema {

	
	public static void main(String[] args)
	{
		
	
	 RegioesSustentaveis regioes = new RegioesSustentaveis();
	 RelatorioCarbono calculo = new RelatorioCarbono();
     
	 float distancia = Float.parseFloat(JOptionPane.showInputDialog("Informe a distãncia máxima que você deseja buscar"));
	 
	 float consumoGas = Float.parseFloat(JOptionPane.showInputDialog("Informe o consumo de gás (em m³) do último mês"));
	 float consumoLuz = Float.parseFloat(JOptionPane.showInputDialog("Informe o consumo de eletricidade (em kWh) do último mês"));

     System.out.println(regioes.regioesProximas(distancia));
     System.out.println(calculo.calcularPegadaCarbono(consumoLuz, consumoGas));

     
	
	}	
	
}
