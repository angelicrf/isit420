using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngeliqueFinalProjecct.Models;

namespace AngeliqueFinalProjecct.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            return View();
        }
        [System.Web.Http.HttpPost]
        public object SetBankDetail(FormCollection fom)
        {
            CommercialBanks cmd = new CommercialBanks();
            cmd.SelectedBank = fom[0].ToString();
            var message = (cmd.SelectedBank) as string;
            return RedirectToAction("Index", "Home", new { message });
        }
        [System.Web.Http.HttpPost]
        public object FailedBks(FormCollection fom)
        {
            CommercialBanks cmd = new CommercialBanks();
            cmd.SelectedBank = fom[0].ToString();
            var message = (cmd.SelectedBank) as string;
            return RedirectToAction("Index", "Home", new { message });
        }

        [System.Web.Http.HttpPost]
        public object InstitutesDetail(FormCollection fom)
        {
            CommercialBanks cmd = new CommercialBanks();
            cmd.SelectedBank = fom[0].ToString();
            var message = (cmd.SelectedBank) as string;
            return RedirectToAction("Index", "Home", new { message });
        }
    }
    
}
