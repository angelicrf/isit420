using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MongoUploadData.Controllers
{
    public class HomeController : ApiController
    {
        NodeOrdersEntities myOrders = new NodeOrdersEntities();
        
        [Route("api/orders")]            
        public object GetAllOrders()
        {
            var result = myOrders.Orders.ToList();
            
            return result;
        }
    }
}
