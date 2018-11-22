using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactAppV2.Models;

namespace ReactAppV2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult ApiTable()
        {
            ViewData["Message"] = "This page fetches news from an open api. Use the textbox to search for news with a custom search query";

            return View();

        }


        public IActionResult DataHandling()


        {
            // DataPackage data = new DataPackage() { id = 1, isActive = true, name = "datanode1", price = 23.23, description = "generic data packege from the database" };

            var dataloader = new DataLoader();

            List<DataPackage> datalist = dataloader.GetDataList();

            // Here we would populate the data object with data from the database
           
            return View(datalist);
        }

        

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
