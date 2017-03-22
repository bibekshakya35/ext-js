/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package np.com.drose.ecommerce.resources;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import np.com.drose.ecommerce.dto.TransactionDto;
import org.apache.commons.lang3.RandomStringUtils;

/**
 *
 * @author Bibek Shakya
 */
@Named
@RequestScoped
@Path("/trans")
public class TransactionResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTransactionCode() {
        return Response.ok().entity(
                new TransactionDto(Integer.parseInt(RandomStringUtils.randomNumeric(2)), Integer.parseInt(RandomStringUtils.randomNumeric(2)), Integer.parseInt(RandomStringUtils.randomNumeric(2)))
        ).build();
    }
}
