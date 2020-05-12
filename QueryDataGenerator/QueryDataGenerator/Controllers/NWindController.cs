using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QueryDataGenerator.Controllers
{
    public class NWindController : ApiController
    {
        NorthwindEntities myentity = new NorthwindEntities();
        [Route("api/northwind3")]
        public IHttpActionResult Get3()
        {
            var ProductCollection2 = from entity in myentity.Order_Details
                                     where (entity.Quantity * entity.UnitPrice) > 5000
                                     select new
                                     {
                                         entity.OrderID,
                                         entity.Quantity,
                                         entity.UnitPrice,
                                         entity.Order.ShipName
                                     };
            return Json(ProductCollection2);
        }

    }
}
