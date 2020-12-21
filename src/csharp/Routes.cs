using Microsoft.AspNetCore.Mvc;

namespace csharp {
    [Route("/")]
    public class TestRoute : Controller {
        [HttpGet]
        public dynamic Test() {
            System.Console.WriteLine("Test route");
            return "test";
        }
    }
}