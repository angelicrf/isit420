using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using AngeliqueFinalProjecct.Models;

namespace AngeliqueFinalProjecct.Controllers
{
    public class CMSController : ApiController
    {
        
        BanksEntities be = new BanksEntities();
        CommercialBanks cmdf = new CommercialBanks();

        [System.Web.Http.Route("api/bankfinder")]
        public IHttpActionResult GetBankTypeList()
        {
            string findBank = HttpContext.Current.Request.UrlReferrer.AbsoluteUri.Split('/').LastOrDefault().Split('=').LastOrDefault();
            var replaced = findBank.Replace("%20", " ");
            var selectBank = (from entity in be.CommercialBanks
                             join cms in be.CommercialFinances on entity.CM_Id equals cms.FK_CM_Id
                             where (entity.Type == replaced)
                             select new
                             {
                                 entity.BankName,
                                 entity.Type,
                                 entity.CharterType,
                                 entity.Headquarters,
                                 TotalAssets = cms.TotalAssets == null ? 0.00 : cms.TotalAssets,
                                 InsuranceFund = cms.InsuranceFund == null ? "0" : cms.InsuranceFund,
                                 entity.FailureDate

                             }).OrderByDescending(x => x.TotalAssets);
            return Json(selectBank);
            
        }
    }
}
