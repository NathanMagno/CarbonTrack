package br.com.fiap.resource;

import br.com.fiap.bo.ResultadoBO;
import br.com.fiap.exceptions.EntidadeNaoEncontrada;
import br.com.fiap.model.Resultado;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import java.sql.SQLException;
import java.util.List;

@Path("/resultados")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ResultadoResource {

    private ResultadoBO resultadoBO;

    public ResultadoResource() throws ClassNotFoundException, SQLException {
        this.resultadoBO = new ResultadoBO();
    }

    @POST
    public Response cadastrar(Resultado resultado, @Context UriInfo uriInfo) throws SQLException {
        Resultado resultadoCadastrado = resultadoBO.cadastrarResultado(resultado);

        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path("resultados/" + resultadoCadastrado.getIdResultado());

        return Response.created(uri.build())
                .entity(resultadoCadastrado).build();
    }

    @GET
    @Path("{id}")
    public Response buscar(@PathParam("id") int id) throws SQLException, EntidadeNaoEncontrada {
        Resultado resultado = resultadoBO.buscarResultadoPorId(id);
        return Response.ok().entity(resultado).build(); 
    }

    @GET
    public Response listar() throws SQLException {
        List<Resultado> resultados = resultadoBO.listarResultados();
        return Response.ok().entity(resultados).build();
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Resultado resultado) throws SQLException, EntidadeNaoEncontrada {
        resultado.setIdResultado(id);
        Resultado resultadoAtualizado = resultadoBO.atualizarResultado(resultado);
        return Response.ok().entity(resultadoAtualizado).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException, EntidadeNaoEncontrada {
        resultadoBO.removerResultado(id);
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}
