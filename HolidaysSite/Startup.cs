using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HolidaysSite.Startup))]
namespace HolidaysSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
