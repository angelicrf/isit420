using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Routing;

namespace _420OrderAnalysis
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
        

            IHttpRoute noteRoute = config.Routes.CreateRoute("api/{controller}/{id}",
                                           new { controller = "Notes", id = RouteParameter.Optional }, null);
            config.Routes.Add("NoteApi", noteRoute);

            //IHttpRoute HomeRoute = config.Routes.CreateRoute("{controller}/{action}/{id}",
            //                       new { controller = "Home",action = "Index", id = RouteParameter.Optional }, null);
            //config.Routes.Add("NotesApi", HomeRoute);

        }
    }
}
