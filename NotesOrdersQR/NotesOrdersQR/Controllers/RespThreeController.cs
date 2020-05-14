using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NotesOrdersQR.Controllers
{
    public class RespThreeController : ApiController
    {
        NodeOrdersEntities myentity = new NodeOrdersEntities();

        [System.Web.Http.Route("api/mongooders3")]
        public IHttpActionResult GetThree()
        {
            var ProductCollection1 = from entity in myentity.StoreTables
                                     join pm in myentity.Orders on entity.StoreNumberID equals pm.StoreNumberID
                                     where (entity.City == "Redmond" )
                                     orderby pm.Price, pm.Datetime
                                     select new
                                     {
                                         entity.City,
                                         pm.Datetime,
                                         pm.Price
                                         
                                     };
            return Json(ProductCollection1);
        }
    }
}
