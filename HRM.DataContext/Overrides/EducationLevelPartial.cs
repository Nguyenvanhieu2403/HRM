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
        public long Id { get; set; }
        public byte? Status { get; set; }
        public DateTime? Modified { get; set; }
        public long? ModifiedBy { get; set; }
    }
}
