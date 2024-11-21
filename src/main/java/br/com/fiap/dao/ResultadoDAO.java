package br.com.fiap.dao;

import br.com.fiap.connections.ConnectionFactory;
import br.com.fiap.exceptions.EntidadeNaoEncontrada;
import br.com.fiap.model.Resultado;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;

public class ResultadoDAO implements AutoCloseable {

    private static final String SQL_SELECT_ALL = "SELECT * FROM tbl_resultados";
    private static final String SQL_SELECT_BY_ID = "SELECT * FROM tbl_resultados WHERE id_resultado = ?";
    private static final String SQL_INSERT = 
            "INSERT INTO tbl_resultados (gasto_energia, gasto_gas, resultado) VALUES (?, ?, ?)";
    private static final String SQL_UPDATE = 
            "UPDATE tbl_resultados SET gasto_energia = ?, gasto_gas = ?, resultado = ? WHERE id_resultado = ?";
    private static final String SQL_DELETE = "DELETE FROM tbl_resultados WHERE id_resultado = ?";

    private Connection connection;

    public ResultadoDAO() throws ClassNotFoundException, SQLException {
        this.connection = ConnectionFactory.conexao();
    }

    public void cadastrar(Resultado resultado) throws SQLException {    
        try (PreparedStatement stm = connection.prepareStatement(SQL_INSERT, Statement.RETURN_GENERATED_KEYS)) {
            preencherStatement(resultado, stm);
            stm.executeUpdate();

            try (ResultSet generatedKeys = stm.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    resultado.setIdResultado(generatedKeys.getInt(1));
                }
            }
        }
    }

    public void atualizar(Resultado resultado) throws SQLException, EntidadeNaoEncontrada {
        try (PreparedStatement stm = connection.prepareStatement(SQL_UPDATE)) {
            preencherStatement(resultado, stm);
            stm.setInt(4, resultado.getIdResultado());

            int linhas = stm.executeUpdate();
            if (linhas == 0) {
                throw new EntidadeNaoEncontrada("Resultado com ID " + resultado.getIdResultado() + " não encontrado.");
            }
        }
    }

    public Resultado procurarPorId(int id) throws SQLException, EntidadeNaoEncontrada {
        try (PreparedStatement stm = connection.prepareStatement(SQL_SELECT_BY_ID)) {
            stm.setInt(1, id);

            try (ResultSet resultSet = stm.executeQuery()) {
                if (resultSet.next()) {
                    return parseResultado(resultSet);
                } else {
                    throw new EntidadeNaoEncontrada("Resultado com ID " + id + " não encontrado.");
                }
            }
        }
    }

    public List<Resultado> listar() throws SQLException {
        try (PreparedStatement stm = connection.prepareStatement(SQL_SELECT_ALL);
             ResultSet resultSet = stm.executeQuery()) {

            List<Resultado> lista = new ArrayList<>();
            while (resultSet.next()) {
                lista.add(parseResultado(resultSet));
            }
            return lista;
        }
    }

    public void remover(int id) throws SQLException, EntidadeNaoEncontrada {
        try (PreparedStatement stm = connection.prepareStatement(SQL_DELETE)) {
            stm.setInt(1, id);

            int linhas = stm.executeUpdate();
            if (linhas == 0) {
                throw new EntidadeNaoEncontrada("Resultado com ID " + id + " não encontrado.");
            }
        }
    }

    private static void preencherStatement(Resultado resultado, PreparedStatement stm) throws SQLException {
        stm.setDouble(1, resultado.getGastoLuz());
        stm.setDouble(2, resultado.getGastoGas());
        stm.setDouble(3, resultado.getResultadoCalculo());
    }

    private static Resultado parseResultado(ResultSet resultSet) throws SQLException {
        Resultado resultado = new Resultado();
        resultado.setIdResultado(resultSet.getInt("id_resultado"));
        resultado.setGastoLuz(resultSet.getDouble("gasto_energia"));
        resultado.setGastoGas(resultSet.getDouble("gasto_gas"));
        resultado.setResultadoCalculo(resultSet.getDouble("resultado"));
        Timestamp timestamp = resultSet.getTimestamp("data_calculo");
        if (timestamp != null) {
            resultado.setDataCalculo(timestamp.toLocalDateTime());
        }
        return resultado;
    }

    @Override
    public void close() throws SQLException {
        if (connection != null && !connection.isClosed()) {
            connection.close();
        }
    }
}
