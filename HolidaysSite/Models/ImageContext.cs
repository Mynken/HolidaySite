using HolidaysSite.Models.ImageModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HolidaysSite.Models
{
    public class ImageContext : DbContext
    {
        public DbSet<Image> Images { get; set; }
        public DbSet<FileImageDetail> FileImageDetails { get; set; }
    }
}