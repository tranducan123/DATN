using MaterialManagement.Models;
using MaterialManagement.Services.Helper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
        public async Task<int> CreateAsync(User entity)
        {
            entity.PasswordHash = Unity.Md5Hash(entity.PasswordHash);
            _context.Set<User>().Add(entity);
            var result = await _context.SaveChangesAsync();
          
            return result;
        }
        public Task<int> UpdateAsync(User entity)
        {
            var oldEntity = _context.Users.Where(c => c.UserId == entity.UserId).FirstOrDefault();
            entity.PasswordHash = oldEntity.PasswordHash;
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));
            _context.Entry(entity).State = EntityState.Modified;
          
            return _context.SaveChangesAsync();
        }
    }
}
