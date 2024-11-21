package br.com.fiap.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Resultado {

    private int idResultado;
    private double gastoLuz;
    private double gastoGas;
    private double resultadoCalculo;
    private LocalDateTime dataCalculo;

    public Resultado() {
        super();
    }

    public Resultado(int idResultado, double gastoLuz, double gastoGas, double resultadoCalculo, LocalDateTime dataCalculo) {
        super();
        this.idResultado = idResultado;
        this.gastoLuz = gastoLuz;
        this.gastoGas = gastoGas;
        this.resultadoCalculo = resultadoCalculo;
        this.dataCalculo = dataCalculo;
    }

    public int getIdResultado() {
        return idResultado;
    }

    public void setIdResultado(int idResultado) {
        this.idResultado = idResultado;
    }

    public double getGastoLuz() {
        return gastoLuz;
    }

    public void setGastoLuz(double gastoLuz) {
        this.gastoLuz = gastoLuz;
    }

    public double getGastoGas() {
        return gastoGas;
    }

    public void setGastoGas(double gastoGas) {
        this.gastoGas = gastoGas;
    }

    public double getResultadoCalculo() {
        return resultadoCalculo;
    }

    public void setResultadoCalculo(double resultadoCalculo) {
        this.resultadoCalculo = resultadoCalculo;
    }

    public LocalDateTime getDataCalculo() {
        return dataCalculo;
    }

    public void setDataCalculo(LocalDateTime dataCalculo) {
        this.dataCalculo = dataCalculo;
    }


    public String getDataCalculoFormatada() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return dataCalculo.format(formatter);
    }

    @Override
    public String toString() {
        return "idResultado = " + idResultado + ", gastoLuz = " + gastoLuz + ", gastoGas = " + gastoGas
                + ", resultadoCalculo = " + resultadoCalculo + ", dataCalculo = " + getDataCalculoFormatada();
    }
}
