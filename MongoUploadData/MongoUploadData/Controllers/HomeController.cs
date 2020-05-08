using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            var users = myOrders.Orders
               .Where(u => u.CdID == u.CdID)
               .Select(u => u.Price)
            .ToList();
            var users_Id = myOrders.Orders
              .Where(u => u.CdID == u.CdID)
              .Select(u => u.StoreNumberID)
             .ToList();
            var users_Oi = myOrders.Orders
              .Where(u => u.CdID == u.CdID)
              .Select(u => u.OrdersID)
             .ToList();
            var users_Spi = myOrders.Orders
               .Where(u => u.CdID == u.CdID)
               .Select(u => u.SalesPersonID)
               .ToList();
            var users_Dt = myOrders.Orders
             .Where(u => u.CdID == u.CdID)
             .Select(u => u.Datetime)
             .ToList();
            var users_Cdi = myOrders.Orders
              .Where(u => u.CdID == u.CdID)
              .Select(u => u.CdID)
              .ToList();
            var users_Ori = myOrders.Orders
             .Where(u => u.CdID == u.CdID)
             .Select(u => u.OrdersID)
             .ToList();
            var numbersAndWords = users_Ori.Zip(users_Id, (first, second) => first + "  " + second)
                .Zip(users_Spi, (x, y) => x + " " + y)
                .Zip(users_Cdi, (x, y) => x + " " + y)
                .Zip(users, (x, y) => x + " " + y)
                .Zip(users_Dt, (x, y) => x + " " + y);
            List<string> myst = new List<string>();
            foreach (var item in numbersAndWords)
            {
                myst.Add(item);
            }
            return myst;
        }
    }
}
