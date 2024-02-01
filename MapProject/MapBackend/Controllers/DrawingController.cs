namespace MapBackend.Controllers
{
    using MapBackend.Models;
    using MapBackend.Services;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;

    [Route("api/drawing")]
    [ApiController]
    public class DrawingController : ControllerBase
    {
        private readonly DrawingService _drawingService;

        public DrawingController(DrawingService drawingService)
        {
            _drawingService = drawingService;
        }

        [HttpPost("add")]
        public IActionResult AddDrawing(DrawingModel drawing)
        {
            _drawingService.AddDrawing(drawing);
            return Ok(new { message = "Drawing added successfully" });
        }

        [HttpGet("get-all")]
        public IActionResult GetAllDrawings()
        {
            var drawings = _drawingService.GetAllDrawings();
            return Ok(drawings);
        }
    }
}
