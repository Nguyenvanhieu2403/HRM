using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HRM.DataContext.Configs;

namespace HRM.Repository.Configs
{
    public static class InjectionRepositoryExtension
    {
        public static void DependencyInjectionRepository(this IServiceCollection services, IConfiguration configuration)
        {
            services.DepedencyInjectionDatacontext(configuration);
        }
    }
}