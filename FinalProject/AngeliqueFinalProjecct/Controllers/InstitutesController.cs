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
    public class InstitutesController : ApiController
    {
        CommercialBanks cmins = new CommercialBanks();
        BanksEntities be = new BanksEntities();

        [System.Web.Http.Route("api/institutesfinder")]
        public IHttpActionResult GetBankTypeList()
        {
            string findBank = HttpContext.Current.Request.UrlReferrer.AbsoluteUri.Split('/').LastOrDefault().Split('=').LastOrDefault();
            var replaced = findBank.Replace("%20", " ");

            var searchInstitutes = (from entity in be.InstitutAlls
                                   join ins in be.InstitutesInsurs on entity.CERT equals ins.FK_CERT
                                   join inf in be.InstitutesFinances on entity.CERT equals inf.FK_CERT
                                   where (entity.STATE == replaced && ins.ROA > 1)
                         
                                   select new
                                   {
                                       entity.BankName,
                                       inf.FK_CERT,
                                       entity.ADDRESS,
                                       entity.COUNTY,
                                       entity.CITY,
                                       entity.STATE,
                                       entity.ZIP,
                                       ROA = ins.ROA > 1 ? "Good" : "--",
                                       TotalAssets = inf.TotalAssets == null ? 0.00 : inf.TotalAssets,
                                       TotalEquity = inf.TotalEquity == null ? 0.00 : inf.TotalEquity,
                                       BankWebSite = entity.BankWebSite == null ? "--" : entity.BankWebSite

                                   }).Distinct().OrderByDescending(x => x.TotalAssets); ;
                                   
            return Json(searchInstitutes);



        }
    }
}