using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestSchtml.Models;
using System.Net.Http;
using System.Web.Http;

namespace TestSchtml.Controllers
{
    public class HomeController : Controller
    {
        string agent = "";
        SelectModel st = new SelectModel();

       
        public ActionResult Index()
        {
           
            ViewBag.Title = "Home Page";
           
            return View();
        }
   
        [System.Web.Http.HttpPost]
        public ActionResult CalcuateMT(FormCollection fc, string agent)
        {
            
            agent = fc[0].ToString();
           // st.Select1 = agent;

            ViewData["agent"] = agent;
            var message = ViewData["agent"] as string;
        
            return RedirectToAction("Index", "Home", new { message });

        }
        [System.Web.Http.HttpPost]
        public ActionResult FindPerson(FormCollection fc, string person)
        {

            person = fc[0].ToString();
            //st.Select1 = person;
            ViewData["person"] = person;
            var showPerson = ViewData["person"] as string;

            return RedirectToAction("Index", "Home", new { showPerson });

        }
        //[System.Web.Http.HttpPost]
        //public ActionResult SelectId(FormCollection fc, string sid)
        //{

        //    sid = fc[0].ToString();
        //    //st.Select1 = sid;
        //    ViewData["sid"] = sid;
        //    var showId = ViewData["sid"] as string;

        //    return RedirectToAction("Index", "Home", new { showId });

        //}

    }
}
