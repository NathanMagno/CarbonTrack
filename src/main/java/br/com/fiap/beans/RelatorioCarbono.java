package br.com.fiap.beans;

public class RelatorioCarbono {

	private int idRelatorio;
	private double resultadoCarbono;

	public RelatorioCarbono() {
		super();
	}

	public RelatorioCarbono(int idRelatorio, double resultadoCarbono) {
		super();
		this.idRelatorio = idRelatorio;
		this.resultadoCarbono = resultadoCarbono;
	}

	public int getIdRelatorio() {
		return idRelatorio;
	}

	public void setIdRelatorio(int idRelatorio) {
		this.idRelatorio = idRelatorio;
	}

	public double getResultadoCarbono() {
		return resultadoCarbono;
	}

	public void setResultadoCarbono(double resultadoCarbono) {
		this.resultadoCarbono = resultadoCarbono;
	}



}
