package br.com.fiap.beans;

public class ProjetosSustentaveis {

	private String tipoProjeto;
	private String status;
	private int idProjeto;

	public ProjetosSustentaveis() {
		super();
	}

	public ProjetosSustentaveis(String tipoProjeto, String status, int idProjeto) {
		super();
		this.tipoProjeto = tipoProjeto;
		this.status = status;
		this.idProjeto = idProjeto;
	}

	public String getTipoProjeto() {
		return tipoProjeto;
	}

	public void setTipoProjeto(String tipoProjeto) {
		this.tipoProjeto = tipoProjeto;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getIdProjeto() {
		return idProjeto;
	}

	public void setIdProjeto(int idProjeto) {
		this.idProjeto = idProjeto;
	}

}
