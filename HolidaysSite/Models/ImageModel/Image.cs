using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HolidaysSite.Models.ImageModel
{
    public class Image
    {
        public int ImageId { get; set; }

        [Required(ErrorMessage = "Введите описание")]
        [Display(Name = "Название праздника(Описание)")]
        public string Description { get; set; }
        public virtual ICollection<FileImageDetail> FileServiceDetails { get; set; }
    }
}