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
	
	 public String regioesProximas(float distancia) {
	        ArrayList<String> areasSustentaveis = new ArrayList<>();
	        
	        if (distancia < 0) {
	            return "Entrada inválida. Por favor, insira uma distância positiva.";
	        }
	        
	        if (distancia >= 0.0f && distancia <= 10.00f) {
	            areasSustentaveis = new ArrayList<>(
	                    Arrays.asList("Parque Ambiental Aracaju", "Reserva Ecológica Litoral do Nordeste"));
	        } else if (distancia >= 10.1f && distancia <= 20.00f) {
	            areasSustentaveis = new ArrayList<>(
	                    Arrays.asList("Parque Ambiental Aracaju", "Reserva Ecológica Litoral do Nordeste", 
	                                  "Área de Reflorestamento João Pessoa", "EcoVila Fortaleza", 
	                                  "Projeto de Energias Renováveis Porto Seguro"));
	        } else {
	            areasSustentaveis = new ArrayList<>(
	                    Arrays.asList("Parque Ambiental Aracaju", "Reserva Ecológica Litoral do Nordeste", 
	                                  "Área de Reflorestamento João Pessoa", "EcoVila Fortaleza", 
	                                  "Projeto de Energias Renováveis Porto Seguro", 
	                                  "Centro de Agroecologia Salvador", "Iniciativa Sustentável Campina Grande"));
	        }
	        
	        return "Com base na distância informada, as regiões sustentáveis mais próximas são: " + areasSustentaveis.toString();
	    }

	   
}
