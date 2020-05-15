using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TestSchtml.Controllers
{
    public class RespController : ApiController
    {
        NodeOrdersEntities myentity = new NodeOrdersEntities();



        [System.Web.Http.Route("api/mongooders1")]
        public IHttpActionResult GetTwo()
        {

            var OrdersMore13 = from entity in myentity.Orders
                                         // join pd in myentity.StoreTables on entity.StoreNumberID equals pd.StoreNumberID
                                         // join ps in myentity.CDTables on entity.CdID equals ps.CdID
                                     where (entity.Price > 13)
                                     orderby entity.StoreTable.City, entity.CDTable.CDname
                                     select new
                                     {
                                         entity.StoreTable.City,
                                         entity.OrdersID,
                                         entity.SalesPersonID,
                                         entity.StoreNumberID,
                                         entity.Price,
                                         entity.CdID,
                                         entity.Datetime

                                     };
            return Json(OrdersMore13);
        }
    }
}
