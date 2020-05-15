using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestSchtml.Models;
using System.Web.Mvc;
using System.Web.Helpers;
using TestSchtml.Controllers;
using System.Web;

namespace TestSchtml.Controllers
{
    public class RespTwoController : ApiController
    {
        NodeOrdersEntities myentity = new NodeOrdersEntities();
        SelectModel ps = new SelectModel();

        string id = HttpContext.Current.Request.UrlReferrer.AbsoluteUri.Split('/').LastOrDefault().Split('=').LastOrDefault();


        [System.Web.Http.Route("api/mongooders2")]
        public IHttpActionResult GetTwo()
        {

            //int newSid = Convert.ToInt32(id);
            var person = id;

            var DisplayPersons = from entity in myentity.Orders
                                     join pm in myentity.SalesPersonTables on entity.SalesPersonID equals pm.SalesPersonID
                                     join pd in myentity.StoreTables on entity.StoreNumberID equals pd.StoreNumberID
                                     join ps in myentity.CDTables on entity.CdID equals ps.CdID
                                     where (pm.LastName == id)
                                    
                                     // && pm.LastName == "person" )
                                     select new
                                     {
                                         pm.LastName,
                                         entity.Price,
                                         pd.City,
                                         ps.CDname
                                     };
            return Json(DisplayPersons);
        }
    }
}
