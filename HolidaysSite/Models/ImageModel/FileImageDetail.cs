using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HolidaysSite.Models.ImageModel
{
    public class FileImageDetail
    {
        public Guid Id { get; set; }
        public string FileName { get; set; }
        public string Extension { get; set; }
        public int ImageId { get; set; }
        public virtual Image Image { get; set; }
    }
}