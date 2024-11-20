package br.com.fiap.beans;

public class RelatorioCarbono {

	private int idRelatorio;
	private double resultadoCarbono;

	private static final double FATOR_EMISSAO_ELETRICIDADE = 0.85;
    private static final double FATOR_EMISSAO_GAS = 1.88;

	
	
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
	
	  public String calcularPegadaCarbono(double consumoEletricidade, double consumoGas) {
	        
	        double emissaoEletricidade = consumoEletricidade * FATOR_EMISSAO_ELETRICIDADE;
	        double emissaoGas = consumoGas * FATOR_EMISSAO_GAS;

	       
	        double totalCO2 = emissaoEletricidade + emissaoGas;

	        return String.format("Sua pegada de carbono é %.2f kgCO₂ por mês.", totalCO2);
	    }



}
