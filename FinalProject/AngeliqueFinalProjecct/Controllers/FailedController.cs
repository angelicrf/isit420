using AngeliqueFinalProjecct.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngeliqueFinalProjecct.Controllers
{
    public class FailedController : ApiController
    {
        CommercialBanks cmdf = new CommercialBanks();
        BanksEntities be = new BanksEntities();
        
        [System.Web.Http.Route("api/failedfinder")]
        public IHttpActionResult GetBankTypeList()
        {
            string findBank = HttpContext.Current.Request.UrlReferrer.AbsoluteUri.Split('/').LastOrDefault().Split('=').LastOrDefault();
            var replaced = findBank.Replace("%20", " ");
            string findFailed = replaced;

            var failedBank = from entity in be.FailedBanks
                             join fi in be.FailedGDPs on entity.FB_Id equals fi.FK_FB_Id
                             join fd in be.FailedFinances on entity.FB_Id equals fd.FK_FB_Id
                             where (entity.BankName == replaced && entity.BankName != null)
                             select new
                             {
                                 entity.BankName,
                                 CERT = entity.CERT == null ? 0.00 : entity.CERT,
                                 CITY = entity.CITY == null ? "--" : entity.CITY,
                                 County = entity.COUNTY == null ? "--" : entity.COUNTY,
                                 STATE = entity.STATE == null ? "--" : entity.STATE,
                                 GDPGrowthQuarterToQuarter = fi.GDPGrowthQuarterToQuarter < 0 ? "Grow Slow" : "Grow fast",
                                 TotalLiabilities = fd.TotalLiabilities == null ? 0 : fd.TotalLiabilities

                             };


            return Json(failedBank);

        }
    }
}
