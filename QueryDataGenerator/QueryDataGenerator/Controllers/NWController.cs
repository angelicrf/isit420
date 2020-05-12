using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace QueryDataGenerator.Controllers
{
    public class NWController : ApiController
    {
        NorthwindEntities myentity = new NorthwindEntities();

        //Route["api/northwind1"]
        [Route("api/northwind2")]
        public IHttpActionResult Get2()
        {
            DateTime someDate = new DateTime(1998, 05, 01);
            var ProductCollection3 = from entity in myentity.Order_Details
                                     where entity.Discount > 0 && entity.Order.ShippedDate > someDate
                                     select new
                                     {
                                         entity.OrderID,
                                         entity.Product.ProductName,
                                         entity.Discount,
                                         entity.Order.OrderDate,
                                         entity.Order.ShippedDate,
                                         entity.Order.ShipCity
                                     };
            return Json(ProductCollection3);
        }

    }
}
