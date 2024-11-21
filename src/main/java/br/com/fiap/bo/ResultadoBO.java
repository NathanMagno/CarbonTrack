package br.com.fiap.bo;

import br.com.fiap.dao.ResultadoDAO;
import br.com.fiap.exceptions.EntidadeNaoEncontrada;
import br.com.fiap.model.Resultado;

import java.sql.SQLException;
import java.util.List;

public class ResultadoBO {
    
    private ResultadoDAO resultadoDAO;
    

    public ResultadoBO() throws ClassNotFoundException, SQLException {
        this.resultadoDAO = new ResultadoDAO();
    }


    public Resultado cadastrarResultado(Resultado resultado) throws SQLException {

        if (resultado.getGastoLuz() < 0 || resultado.getGastoGas() < 0) {
            throw new IllegalArgumentException("Os gastos não podem ser negativos.");
        }

        resultadoDAO.cadastrar(resultado);
        return resultado;
    }


    public Resultado atualizarResultado(Resultado resultado) throws SQLException, EntidadeNaoEncontrada {

        if (resultado.getIdResultado() <= 0) {
            throw new IllegalArgumentException("ID do resultado inválido.");
        }
        
 
        resultadoDAO.atualizar(resultado);
        return resultado;
    }


    public Resultado buscarResultadoPorId(int id) throws SQLException, EntidadeNaoEncontrada {

        if (id <= 0) {
            throw new IllegalArgumentException("ID inválido.");
        }
        
        return resultadoDAO.procurarPorId(id);
    }
    public List<Resultado> listarResultados() throws SQLException {
        return resultadoDAO.listar();
    }


    public void removerResultado(int id) throws SQLException, EntidadeNaoEncontrada {
        if (id <= 0) {
            throw new IllegalArgumentException("ID inválido.");
        }
        resultadoDAO.remover(id);
    }
}
