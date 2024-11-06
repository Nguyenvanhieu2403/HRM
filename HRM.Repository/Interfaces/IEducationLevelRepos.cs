using HRM.DataContext;
using HRM.DataContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VnPostLib.Common.Api.Models;
using VnPostLib.Common.Base.Interfaces;

namespace HRM.Repository.Interfaces
{
    public interface IEducationLevelRepos : IBaseRepos<EducationLevel>
    {
        Task<MethodResult<int>> GetsEducationLevelId();
        Task<MethodResult<List<EducationLevel>>> GetsEducationLevel(EducationLevelModel model);
    }
}
