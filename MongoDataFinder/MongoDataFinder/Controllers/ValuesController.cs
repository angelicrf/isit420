using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MongoDataFinder.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public object Get()
        {
            var constr = "mongodb+srv://angelref:angelref123456@clusterisit1-u7dpt.mongodb.net/ToDos?retryWrites=true&w=majority";
            var fmongo = new MongoClient(constr);
            var db = fmongo.GetDatabase("ToDos");
            var md = db.GetCollection<Order>("todos");
            var md2 = md.Find(new BsonDocument()).ToList();
      
            return Json(md2);
            }

            // GET api/values/5
            public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
