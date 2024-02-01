using MapBackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(); 
builder.Services.AddControllers();
builder.Services.AddScoped<DrawingService>();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());

app.MapControllers();


app.Run();
