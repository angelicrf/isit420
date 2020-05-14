using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NotesOrdersQR.Controllers
{
    public class RespTwoController : ApiController
    {
        NodeOrdersEntities myentity = new NodeOrdersEntities();

        [System.Web.Http.Route("api/mongooders2")]
        public IHttpActionResult GetTwo()
        {
            var ProductCollection1 = from entity in myentity.Orders
                                     join pm in myentity.SalesPersonTables on entity.SalesPersonID equals pm.SalesPersonID
                                     join pd in myentity.StoreTables on entity.StoreNumberID equals pd.StoreNumberID
                                     join ps in myentity.CDTables on entity.CdID equals ps.CdID
                                     where (entity.SalesPersonID == 21 && pm.LastName == "White") 
                                     select new
                                     {
                                         pm.LastName,
                                         entity.Price,
                                         pd.City,
                                         ps.CDname
                                     };
            return Json(ProductCollection1);
        }
    }
}
