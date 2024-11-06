using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VnPostLib.Common.Base.Interfaces;

namespace HRM.DataContext
{
    public partial class EducationLevel : IBaseModel
    {
        [NotMapped]
        public long Id { get; set; }
        [NotMapped]
        public byte? Status { get; set; }
        [NotMapped]
        public DateTime? Modified { get; set; }
        [NotMapped]
        public long? ModifiedBy { get; set; }
    }
}
