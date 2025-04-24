using MaterialManagement.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using MaterialManagement.Helper;
using Microsoft.OpenApi.Models;
using MaterialManagement.Services;
using MaterialManagement.Services.Impl;
IConfiguration configuration = new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json")
                            .Build();

var builder = WebApplication.CreateBuilder(args);
ConfigurationHelper.Initialize(builder.Configuration);
// Add services to the container.
builder.Services.AddRazorPages();
var dbConnection = Environment.GetEnvironmentVariable("DB");
IServiceCollection services = builder.Services;
IdentityModelEventSource.ShowPII = true;
services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    x.JsonSerializerOptions.PropertyNamingPolicy = null;
    x.JsonSerializerOptions.WriteIndented = true;
}).AddOData(options => options.Select().Filter().OrderBy().Expand().EnableQueryFeatures().AddRouteComponents(GetEdmModel()));
//string connectionString = builder.Configuration["ConnectionStrings:QLSX_PHIM"];
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.Limits.MaxRequestBodySize = int.MaxValue;
});
builder.Services.AddDbContext<MaterialManagementContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("value")));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt.Issuer"],
        ValidAudience = builder.Configuration["Jwt.Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt.Key"]))
    };
});

services.Configure<FormOptions>(options =>
{
    options.MemoryBufferThreshold = Int32.MaxValue;
});

services.AddRouting();
services.AddTransient<ICategoryService, CategoryService>();
services.AddTransient<IDepartmentService, DepartmentService>();

services.AddTransient<IInventoryTransactionService, InventoryService>();

services.AddTransient<IMaterialService, MaterialService>();
services.AddTransient<IOrderService, OrderService>();
services.AddTransient<IOrderDetailService, OrderDetailService>();

services.AddTransient<IRequestService, RequestService>();
services.AddTransient<IRequestDetailService, RequestDetailService>();
services.AddTransient<IUserRoleService, UserRoleService>();
services.AddTransient<IAuthenticationService, AuthenticationService>();
services.AddTransient<ICommoncategoryService, CommoncategoryService>();


services.AddTransient<IRoleService, RoleService>();

services.AddTransient<ISupplier, SupplierService>();
services.AddTransient<IUserService, UserService>();
services.AddTransient<IWarehouseService,WarehouseService>();


services.AddTransient<IWarehouseResponseService, WareHouseDetailService>();








services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mirror API", Version = "v1", Description = "Version: 1.0.0" });
});


var app = builder.Build();
// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
    c.RoutePrefix = "DocumentAPI";

});
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});
ConfigurationHelper.Initialize(builder.Configuration);
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
IEdmModel GetEdmModel()
{
    var odataBuilder = new ODataConventionModelBuilder();
    odataBuilder.EntitySet<Category>("Categories").EntityType.HasKey(x => x.CategoryId).Expand(5).Count().Page(100, 100);
    odataBuilder.EntitySet<Department>("Departments").EntityType.HasKey(x => x.DepartmentId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<InventoryTransaction>("InventoryTransactions").EntityType.HasKey(x => x.TransactionId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Material>("Materials").EntityType.HasKey(x => x.MaterialId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Order>("Orders").EntityType.HasKey(x => x.OrderId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<OrderDetail>("OrderDetails").EntityType.HasKey(x => x.OrderDetailId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Request>("Requests").EntityType.HasKey(x => x.RequestId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<RequestDetail>("RequestDetails").EntityType.HasKey(x => x.RequestDetailId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Role>("Roles").EntityType.HasKey(x => x.RoleId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Supplier>("Suppliers").EntityType.HasKey(x => x.SupplierId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<User>("Users").EntityType.HasKey(x => x.UserId).Expand(5).Count().Page(100, 100);
    odataBuilder.EntitySet<UserRole>("UserRoles").EntityType.HasKey(x => x.RoleId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<Warehouse>("Warehouses").EntityType.HasKey(x => x.WarehouseId).Expand(5).Count().Page(100, 100);

    odataBuilder.EntitySet<WarehouseReport>("WarehouseReports").EntityType.HasKey(x => x.ReportId).Expand(5).Count().Page(100, 100);
    odataBuilder.EntitySet<Commoncategory>("Commoncategories").EntityType.HasKey(x => x.Id).Expand(5).Count().Page(100, 100);
    return odataBuilder.GetEdmModel();
}

