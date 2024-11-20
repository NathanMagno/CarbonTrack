package br.com.fiap.beans;

import java.security.Timestamp;

public class FeedbackUsuario {

	private String mensagem;
	private int idFeedback;
	private Timestamp data_envio;

	public FeedbackUsuario() {
		super();
	}

	public FeedbackUsuario(String mensagem, int idFeedback, Timestamp data_envio) {
		super();
		this.mensagem = mensagem;
		this.idFeedback = idFeedback;
		this.data_envio = data_envio;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public int getIdFeedback() {
		return idFeedback;
	}

	public void setIdFeedback(int idFeedback) {
		this.idFeedback = idFeedback;
	}

	public Timestamp getData_envio() {
		return data_envio;
	}

	public void setData_envio(Timestamp data_envio) {
		this.data_envio = data_envio;
	}

}
