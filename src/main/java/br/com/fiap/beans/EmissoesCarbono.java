package br.com.fiap.beans;

public class EmissoesCarbono {

	private double valorEmitido;
	private double valorBaixo;
	private double valorMedio;
	private double valorAlto;

	public EmissoesCarbono() {
		super();
	}

	public EmissoesCarbono(double valorEmitido, double valorBaixo, double valorMedio, double valorAlto) {
		super();
		this.valorEmitido = valorEmitido;
		this.valorBaixo = valorBaixo;
		this.valorMedio = valorMedio;
		this.valorAlto = valorAlto;
	}

	public double getValorEmitido() {
		return valorEmitido;
	}

	public void setValorEmitido(double valorEmitido) {
		this.valorEmitido = valorEmitido;
	}

	public double getValorBaixo() {
		return valorBaixo;
	}

	public void setValorBaixo(double valorBaixo) {
		this.valorBaixo = valorBaixo;
	}

	public double getValorMedio() {
		return valorMedio;
	}

	public void setValorMedio(double valorMedio) {
		this.valorMedio = valorMedio;
	}

	public double getValorAlto() {
		return valorAlto;
	}

	public void setValorAlto(double valorAlto) {
		this.valorAlto = valorAlto;
	}

}
