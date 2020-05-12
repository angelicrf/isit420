using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;


namespace QueryDataGenerator.Controllers
{
    public class NorthWindController : ApiController
    {
        NorthwindEntities myentity = new NorthwindEntities();
        [System.Web.Http.Route("api/northwind1")]
        public IHttpActionResult Get()
        {
            var ProductCollection1 = from entity in myentity.Order_Details
                                     where (entity.Quantity * entity.UnitPrice) > 10000
                                     select new
                                     {
                                         entity.OrderID,
                                         entity.Quantity,
                                         entity.UnitPrice,
                                         entity.Product.ProductName
                                     };
            return Json(ProductCollection1);
        }

    }
}
