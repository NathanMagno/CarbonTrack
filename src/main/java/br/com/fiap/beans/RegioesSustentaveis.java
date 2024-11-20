package br.com.fiap.beans;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

public class RegioesSustentaveis {

	private String cidade;
	private String nome;
	private String estado;

	public RegioesSustentaveis() {
		super();
	}

	public RegioesSustentaveis(String cidade, String nome, String estado) {
		super();
		this.cidade = cidade;
		this.nome = nome;
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	public String locaisProximos(float distancia)
	{
		ArrayList<String> areasOficinas = new ArrayList<String>();
		if (distancia < 0)
		{
			System.out.print("Entrada inválida");
		}
		if (distancia >= 0.0f && distancia <= 10.00f)
		{
			areasOficinas = new ArrayList<>(
					Arrays.asList("Aracaju", "Litoral do Nordeste"));
		}
		else if (distancia >= 10.1f && distancia <= 20.00f)
		{
			areasOficinas = new ArrayList<>(
					Arrays.asList("Aracaju", "Litoral do Nordeste", "João Pessoa", "Fortaleza", "Porto Seguro"));
		}
		else
		{
			areasOficinas = new ArrayList<>(
					Arrays.asList("Aracaju", "Litoral do Nordeste", "João Pessoa", "Fortaleza", "Porto Seguro",
							"Salvador", "Campina Grande"));
		}
		return "Com base na distância informada, as oficinas mais proximas são: " + areasOficinas.toString();
	}
	
	
	public String mostrarLocais() {
		ArrayList<String> areasOficinas = new ArrayList<>(
				Arrays.asList("Aracaju", "Litoral do Nordeste", "João Pessoa", "Fortaleza", "Xique Xique"));
		
		Random retornoAleatorio = new Random();
		int indiceLista = retornoAleatorio.nextInt(areasOficinas.size());
		String  retornoLocal = areasOficinas.get(indiceLista);
		return "\nLocais próximos de oficina: " + retornoLocal	;
	}

}
