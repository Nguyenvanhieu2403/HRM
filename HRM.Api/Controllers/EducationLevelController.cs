using AutoMapper;
using HRM.DataContext;
using HRM.DataContext.Model;
using HRM.Repository;
using HRM.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VnPostLib.Common.Api.Attributes;
using VnPostLib.Common.Api.Models;
using VnPostLib.Common.Api.Services.Interfaces;
using VnPostLib.Common.Base;

namespace HRM.Api.Controllers
{
    [Route("[controller]")]
    [Authorize]
    [ApiController]
    public class EducationLevelController : BaseController<IEducationLevelRepos, EducationLevel>
    {
        public EducationLevelController(IMapper mapper
            , ILogger<EducationLevelController> logger
            , IEducationLevelRepos repos
            , IUserPrincipalService userPrincipalService
            ) : base(mapper, logger, repos, userPrincipalService)
        {
        }

        [HttpGet("GetsEducationLevelId")]
        public async Task<IActionResult> GetsEducationLevelId()
        {
            try
            {
                return ResponseResult(await _repos.GetsEducationLevelId());
            }
            catch (Exception ex)
            {
                Exception e = ex;
                _logger.LogError(e, $"EducationLevelController.GetsEducationLevelId");
                return ResponseResult(MethodResult.ResultWithError(e.ToString()));
            }
        }

        [HttpPost("GetsEducationLevel")]
        public async Task<IActionResult> GetsEducationLevel(EducationLevelModel model)
        {
            try
            {
                return ResponseResult(await _repos.GetsEducationLevel(model));
            }
            catch (Exception ex)
            {
                Exception e = ex;
                _logger.LogError(e, $"EducationLevelController.GetsEducationLevel");
                return ResponseResult(MethodResult.ResultWithError(e.ToString()));
            }
        }
    }
}
