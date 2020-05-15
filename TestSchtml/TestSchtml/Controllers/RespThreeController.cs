using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using TestSchtml.Models;

namespace TestSchtml.Controllers
{
    public class RespThreeController : ApiController
    {
        NodeOrdersEntities myentity = new NodeOrdersEntities();
        SelectModel ps = new SelectModel();

        string id = HttpContext.Current.Request.UrlReferrer.AbsoluteUri.Split('/').LastOrDefault().Split('=').LastOrDefault();

        [System.Web.Http.Route("api/mongooders3")]
        public IHttpActionResult GetThree()
        {

            string newID = id;

            var FindCity = from entity in myentity.StoreTables
                                     join pm in myentity.Orders on entity.StoreNumberID equals pm.StoreNumberID
                                     where (entity.City == id)
                                     orderby pm.Price, pm.Datetime
                                     select new
                                     {
                                         entity.City,
                                         pm.Datetime,
                                         pm.Price

                                     };
            return Json(FindCity);
        }
    }
}
