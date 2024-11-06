using Dapper;
using HRM.DataContext;
using HRM.DataContext.Constants;
using HRM.DataContext.Model;
using HRM.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VnPostLib.Common.Api.Models;
using VnPostLib.Common.Base;

namespace HRM.Repository
{
    public class EducationLevelRepos : BaseRepos<EducationLevel>, IEducationLevelRepos
    {
        private readonly IConfiguration _configuration;

        public EducationLevelRepos(IConfiguration configuration) : base(configuration, ServiceConstant.DefaultSchema)
        {
            _configuration = configuration;
        }

        public async Task<MethodResult<List<EducationLevel>>> GetsEducationLevel(EducationLevelModel model)
        {
            using var conn = GetOpenConnection();
            var data = await conn.QueryAsync<EducationLevel>(
                "GetsEducationLevel"
                , new
                {
                    model.Code,
                    model.pageIndex,
                    model.pageSize
                }, commandType: CommandType.StoredProcedure, commandTimeout: 240);

            conn.Close();
            var ToltalRecord = data.Any() ? data.FirstOrDefault().TotalRecord : 0;
            return MethodResult<List<EducationLevel>>.ResultWithData(data.ToList(), "", ToltalRecord);
        }

        public async Task<MethodResult<int>> GetsEducationLevelId()
        {
            using var conn = GetOpenConnection();
            var data = await conn.QueryFirstOrDefaultAsync<int>(
                "GetEducationLevelId"
                , commandType: CommandType.StoredProcedure);

            conn.Close();
            return MethodResult<int>.ResultWithData(data, "", 0);
        }
    }
}
