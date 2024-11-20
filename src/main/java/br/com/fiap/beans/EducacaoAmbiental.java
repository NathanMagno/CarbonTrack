package br.com.fiap.beans;

public class EducacaoAmbiental {

	private int IdEducacao;
	private String tipoConteudo;
	private String titulo;
	private String descricao;

	public EducacaoAmbiental() {
		super();
	}

	public EducacaoAmbiental(int idEducacao, String tipoConteudo, String titulo, String descricao) {
		super();
		IdEducacao = idEducacao;
		this.tipoConteudo = tipoConteudo;
		this.titulo = titulo;
		this.descricao = descricao;
	}

	public int getIdEducacao() {
		return IdEducacao;
	}

	public void setIdEducacao(int idEducacao) {
		IdEducacao = idEducacao;
	}

	public String getTipoConteudo() {
		return tipoConteudo;
	}

	public void setTipoConteudo(String tipoConteudo) {
		this.tipoConteudo = tipoConteudo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
