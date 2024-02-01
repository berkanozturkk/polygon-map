namespace MapBackend.Services
{
    using MapBackend.Models;
    using System.Collections.Generic;
    using System.IO;
    using System.Text.Json;

    public class DrawingService
    {
        private const string FilePath = "wwwroot/drawings.json";

        public void AddDrawing(DrawingModel drawing)
        {
            var drawings = GetDrawings();
            drawings.Add(drawing);
            SaveDrawings(drawings);
        }

        public List<DrawingModel> GetAllDrawings()
        {
            return GetDrawings();
        }

        private List<DrawingModel> GetDrawings()
        {
            if (File.Exists(FilePath))
            {
                var jsonLines = File.ReadAllLines(FilePath);

                var drawings = new List<DrawingModel>();

                foreach (var line in jsonLines)
                {
                    if (!string.IsNullOrEmpty(line))
                    {
                        var drawing = JsonSerializer.Deserialize<DrawingModel>(line);
                        drawings.Add(drawing);
                    }
                }

                return drawings;
            }

            return new List<DrawingModel>();
        }

        private void SaveDrawings(List<DrawingModel> drawings)
        {
            var jsonLines = drawings.Select(drawing => JsonSerializer.Serialize(drawing));

            File.WriteAllLines(FilePath, jsonLines);
        }

    }
}
