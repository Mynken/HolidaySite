using HolidaysSite.Models;
using HolidaysSite.Models.ImageModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.IO;

namespace HolidaysSite.Controllers
{
    public class HappyTogetherController : Controller
    {
        private ImageContext db = new ImageContext();
        // GET: Test
        public ActionResult Main()
        {
            return View(db.Images.ToList());
        }
        public ActionResult PartialWork(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Image image = db.Images.Include(s => s.FileServiceDetails).SingleOrDefault(x => x.ImageId == id);

            if (image == null)
            {
                return HttpNotFound();
            }
            return View(image);
        }
        public ActionResult GetImage(string imageId)
        {
            if (imageId != null)
            {
                var dir = Server.MapPath("~/App_Data/Upload/");
                var path = Path.Combine(dir, imageId + ".jpg");
                return File(path, "image/jpeg");
            }
            else
            {
                return null;
            }
        }
    }
}
