namespace MapBackend.Models
{
    public class DrawingModel
    {
        public string Name { get; set; }
        public int Number { get; set; }
        public List<Coordinate> Coordinates { get; set; }
  
    }

    public class Coordinate
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        
    }
}
