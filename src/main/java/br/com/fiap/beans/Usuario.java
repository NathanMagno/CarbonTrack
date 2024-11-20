package br.com.fiap.beans;

public class Usuario {

	private int idUsuario;
	private String email;
	private String senha;
	private Endereco endereco;

	
	
	public Usuario(int idUsuario, String email, String senha, Endereco endereco) {
		super();
		this.idUsuario = idUsuario;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
	}

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
}
