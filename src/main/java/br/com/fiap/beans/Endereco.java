package br.com.fiap.beans;

public class Endereco {

	private String rua;
	private String cep;
	private String estado;
	private String cidade;
	private int numero;

	public Endereco() {
		super();
	}

	public Endereco(String rua, String cep, String estado, String cidade, int numero) {
		super();
		this.rua = rua;
		this.cep = cep;
		this.estado = estado;
		this.cidade = cidade;
		this.numero = numero;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

}
