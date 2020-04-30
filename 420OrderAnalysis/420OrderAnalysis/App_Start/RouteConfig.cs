using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace _420OrderAnalysis
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
             name: "Default",
             url: "{controller}/{action}/{id}",
             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
         );
            routes.MapRoute(
                name: "Nopi",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Notes", action = "notes", id = UrlParameter.Optional }
            );
        
        }
    }
}
