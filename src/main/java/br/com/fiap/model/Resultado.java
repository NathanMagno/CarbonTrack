package br.com.fiap.model;

public class Resultado {

	private double gasto_luz;
	private double gasto_gas;
	private double resultado_calculo;

	public Resultado() {
		super();
	}

	public Resultado(double gasto_luz, double gasto_gas, double resultado_calculo) {
		super();
		this.gasto_luz = gasto_luz;
		this.gasto_gas = gasto_gas;
		this.resultado_calculo = resultado_calculo;
	}

	public double getGasto_luz() {
		return gasto_luz;
	}

	public void setGasto_luz(double gasto_luz) {
		this.gasto_luz = gasto_luz;
	}

	public double getGasto_gas() {
		return gasto_gas;
	}

	public void setGasto_gas(double gasto_gas) {
		this.gasto_gas = gasto_gas;
	}

	public double getResultado_calculo() {
		return resultado_calculo;
	}

	public void setResultado_calculo(double resultado_calculo) {
		this.resultado_calculo = resultado_calculo;
	}

}
