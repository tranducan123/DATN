type TCategory = Category;
type TDepartment = Department;
type TInventoryTransaction = InventoryTransaction;
type TMaterial = Material;
type TOrder = Order;
type TOrderDetail = OrderDetail;
type TRequest = Request;
type TRequestDetail = RequestDetail;
type TRole = Role;
type TWarehouseSource = WarehouseSource;
type TSupplier = Supplier;
type TDetail = Detail;
type TUser = User;
type TUserRole = UserRole;
type TWarehouse = Warehouse;
type TWarehouseReport = WarehouseReport;
type TCommoncategory = Commoncategory;
import { JsonObject, JsonProperty, JsonConverter, JsonConvert, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class NumberConverter implements JsonCustomConvert<number> {
    serialize(data: any): number {
        if (Number.isNaN(data)) {
            return data;
        } else {
            return Number(data);
        }
    }
    deserialize(data: any): number {
        if (typeof data === 'undefined' || data === null) {
            return data;
        }
        if (Number.isNaN(data)) {
            return data;
        } else {
            return Number(data);
        }
    }
}
@JsonConverter
export class StringConverter implements JsonCustomConvert<string> {
    serialize(data: any): string {
        if (data) {
            return data.toString();
        } else {
            return data;
        }
    }
    deserialize(data: any): string {
        if (data) {
            return data.toString();
        } else {
            return data;
        }
    }
}
@JsonConverter
export class BooleanConverter implements JsonCustomConvert<boolean> {
    serialize(data: any): boolean {
        if (typeof (data) === 'boolean') {
            return data;
        } else {
            return data;
        }
    }
    deserialize(data: any): boolean {
        if (typeof (data) === 'boolean') {
            return data;
        } else {
            return data;
        }
    }
}
@JsonConverter
export class DateTimeConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        function pad(number: any) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            '.' + (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    }
    deserialize(date: any): Date {
        const dReturn = new Date(date);
        if (dReturn.getFullYear() === 1970
            && dReturn.getMonth() === 0
            && dReturn.getDate() === 1) {
            return null as any;
        } else {
            return dReturn;
        }
    }
}
@JsonConverter
export class MaterialArrayConverter implements JsonCustomConvert<Material[]> {
    serialize(data: Material[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Material[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Material);
    }
}
@JsonConverter
export class RequestArrayConverter implements JsonCustomConvert<Request[]> {
    serialize(data: Request[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Request[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Request);
    }
}
@JsonConverter
export class UserArrayConverter implements JsonCustomConvert<User[]> {
    serialize(data: User[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): User[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, User);
    }
}
@JsonConverter
export class WarehouseSourceArrayConverter implements JsonCustomConvert<WarehouseSource[]> {
    serialize(data: WarehouseSource[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): WarehouseSource[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, WarehouseSource);
    }
}
@JsonConverter
export class WarehouseArrayConverter implements JsonCustomConvert<Warehouse[]> {
    serialize(data: Warehouse[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Warehouse[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Warehouse);
    }
}
@JsonConverter
export class MaterialConverter implements JsonCustomConvert<Material> {
    serialize(data: Material): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Material {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Material);
    }
}
@JsonConverter
export class RequestConverter implements JsonCustomConvert<Request> {
    serialize(data: Request): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Request {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Request);
    }
}
@JsonConverter
export class WarehouseConverter implements JsonCustomConvert<Warehouse> {
    serialize(data: Warehouse): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Warehouse {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Warehouse);
    }
}
@JsonConverter
export class CategoryConverter implements JsonCustomConvert<Category> {
    serialize(data: Category): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Category {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Category);
    }
}
@JsonConverter
export class DepartmentConverter implements JsonCustomConvert<Department> {
    serialize(data: Department): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Department {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Department);
    }
}
@JsonConverter
export class DetailArrayConverter implements JsonCustomConvert<Detail[]> {
    serialize(data: Detail[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Detail[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Detail);
    }
}
@JsonConverter
export class InventoryTransactionArrayConverter implements JsonCustomConvert<InventoryTransaction[]> {
    serialize(data: InventoryTransaction[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): InventoryTransaction[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, InventoryTransaction);
    }
}
@JsonConverter
export class OrderDetailArrayConverter implements JsonCustomConvert<OrderDetail[]> {
    serialize(data: OrderDetail[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): OrderDetail[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, OrderDetail);
    }
}
@JsonConverter
export class RequestDetailArrayConverter implements JsonCustomConvert<RequestDetail[]> {
    serialize(data: RequestDetail[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): RequestDetail[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, RequestDetail);
    }
}
@JsonConverter
export class WarehouseReportArrayConverter implements JsonCustomConvert<WarehouseReport[]> {
    serialize(data: WarehouseReport[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): WarehouseReport[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, WarehouseReport);
    }
}
@JsonConverter
export class UserConverter implements JsonCustomConvert<User> {
    serialize(data: User): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): User {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, User);
    }
}
@JsonConverter
export class SupplierConverter implements JsonCustomConvert<Supplier> {
    serialize(data: Supplier): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Supplier {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Supplier);
    }
}
@JsonConverter
export class OrderConverter implements JsonCustomConvert<Order> {
    serialize(data: Order): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Order {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Order);
    }
}
@JsonConverter
export class UserRoleArrayConverter implements JsonCustomConvert<UserRole[]> {
    serialize(data: UserRole[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): UserRole[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, UserRole);
    }
}
@JsonConverter
export class OrderArrayConverter implements JsonCustomConvert<Order[]> {
    serialize(data: Order[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Order[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Order);
    }
}
@JsonConverter
export class RoleConverter implements JsonCustomConvert<Role> {
    serialize(data: Role): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Role {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Role);
    }
}
@JsonConverter
export class WarehouseSourceConverter implements JsonCustomConvert<WarehouseSource> {
    serialize(data: WarehouseSource): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): WarehouseSource {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, WarehouseSource);
    }
}
@JsonConverter
export class CommoncategoryConverter implements JsonCustomConvert<Commoncategory> {
    serialize(data: Commoncategory): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Commoncategory {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Commoncategory);
    }
}
@JsonConverter
export class CommoncategoryArrayConverter implements JsonCustomConvert<Commoncategory[]> {
    serialize(data: Commoncategory[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Commoncategory[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Commoncategory);
    }
}

@JsonObject('Category')
export class Category {

    @JsonProperty('CategoryId', NumberConverter, true)
    CategoryId: number = undefined as any;

    @JsonProperty('CategoryName', StringConverter, true)
    CategoryName: string = undefined as any;

    @JsonProperty('Type', StringConverter, true)
    Type: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('Materials', MaterialArrayConverter, true)
    Materials: Material[] = [] as any;

}

@JsonObject('Department')
export class Department {

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('DepartmentName', StringConverter, true)
    DepartmentName: string = undefined as any;

    @JsonProperty('Role', StringConverter, true)
    Role: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Materials', MaterialArrayConverter, true)
    Materials: Material[] = [] as any;

    @JsonProperty('RequestDepartmentRatings', RequestArrayConverter, true)
    RequestDepartmentRatings: Request[] = [] as any;

    @JsonProperty('RequestDepartmentReceives', RequestArrayConverter, true)
    RequestDepartmentReceives: Request[] = [] as any;

    @JsonProperty('RequestDepartments', RequestArrayConverter, true)
    RequestDepartments: Request[] = [] as any;

    @JsonProperty('Users', UserArrayConverter, true)
    Users: User[] = [] as any;

    @JsonProperty('WarehouseSources', WarehouseSourceArrayConverter, true)
    WarehouseSources: WarehouseSource[] = [] as any;

    @JsonProperty('Warehouses', WarehouseArrayConverter, true)
    Warehouses: Warehouse[] = [] as any;

}

@JsonObject('InventoryTransaction')
export class InventoryTransaction {

    @JsonProperty('TransactionId', NumberConverter, true)
    TransactionId: number = undefined as any;

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('Quantity', NumberConverter, true)
    Quantity: number = undefined as any;

    @JsonProperty('TransactionType', StringConverter, true)
    TransactionType: string = undefined as any;

    @JsonProperty('RelatedRequestId', NumberConverter, true)
    RelatedRequestId: number = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Material', MaterialConverter, true)
    Material: Material = undefined as any;

    @JsonProperty('RelatedRequest', RequestConverter, true)
    RelatedRequest: Request = undefined as any;

    @JsonProperty('Warehouse', WarehouseConverter, true)
    Warehouse: Warehouse = undefined as any;

}

@JsonObject('Material')
export class Material {

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('MaterialName', StringConverter, true)
    MaterialName: string = undefined as any;

    @JsonProperty('CategoryId', NumberConverter, true)
    CategoryId: number = undefined as any;

    @JsonProperty('Unit', StringConverter, true)
    Unit: string = undefined as any;

    @JsonProperty('Price', NumberConverter, true)
    Price: number = undefined as any;

    @JsonProperty('StockQuantity', NumberConverter, true)
    StockQuantity: number = undefined as any;

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('ExpiryDate', DateTimeConverter, true)
    ExpiryDate: Date = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('Category', CategoryConverter, true)
    Category: Category = undefined as any;

    @JsonProperty('Department', DepartmentConverter, true)
    Department: Department = undefined as any;

    @JsonProperty('Warehouse', WarehouseConverter, true)
    Warehouse: Warehouse = undefined as any;

    @JsonProperty('Details', DetailArrayConverter, true)
    Details: Detail[] = [] as any;

    @JsonProperty('InventoryTransactions', InventoryTransactionArrayConverter, true)
    InventoryTransactions: InventoryTransaction[] = [] as any;

    @JsonProperty('OrderDetails', OrderDetailArrayConverter, true)
    OrderDetails: OrderDetail[] = [] as any;

    @JsonProperty('RequestDetails', RequestDetailArrayConverter, true)
    RequestDetails: RequestDetail[] = [] as any;

    @JsonProperty('WarehouseReports', WarehouseReportArrayConverter, true)
    WarehouseReports: WarehouseReport[] = [] as any;

}

@JsonObject('Order')
export class Order {

    @JsonProperty('OrderId', NumberConverter, true)
    OrderId: number = undefined as any;

    @JsonProperty('RequestId', NumberConverter, true)
    RequestId: number = undefined as any;

    @JsonProperty('SupplierId', NumberConverter, true)
    SupplierId: number = undefined as any;

    @JsonProperty('OrderDate', DateTimeConverter, true)
    OrderDate: Date = undefined as any;

    @JsonProperty('Status', StringConverter, true)
    Status: string = undefined as any;

    @JsonProperty('CreatedBy', NumberConverter, true)
    CreatedBy: number = undefined as any;

    @JsonProperty('ApprovedBy', NumberConverter, true)
    ApprovedBy: number = undefined as any;

    @JsonProperty('ApprovedByNavigation', UserConverter, true)
    ApprovedByNavigation: User = undefined as any;

    @JsonProperty('CreatedByNavigation', UserConverter, true)
    CreatedByNavigation: User = undefined as any;

    @JsonProperty('Request', RequestConverter, true)
    Request: Request = undefined as any;

    @JsonProperty('Supplier', SupplierConverter, true)
    Supplier: Supplier = undefined as any;

    @JsonProperty('OrderDetails', OrderDetailArrayConverter, true)
    OrderDetails: OrderDetail[] = [] as any;

}

@JsonObject('OrderDetail')
export class OrderDetail {

    @JsonProperty('OrderDetailId', NumberConverter, true)
    OrderDetailId: number = undefined as any;

    @JsonProperty('OrderId', NumberConverter, true)
    OrderId: number = undefined as any;

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('Quantity', NumberConverter, true)
    Quantity: number = undefined as any;

    @JsonProperty('Price', NumberConverter, true)
    Price: number = undefined as any;

    @JsonProperty('Material', MaterialConverter, true)
    Material: Material = undefined as any;

    @JsonProperty('Order', OrderConverter, true)
    Order: Order = undefined as any;

}

@JsonObject('Request')
export class Request {

    @JsonProperty('RequestId', NumberConverter, true)
    RequestId: number = undefined as any;

    @JsonProperty('RequestType', StringConverter, true)
    RequestType: string = undefined as any;

    @JsonProperty('RequestDate', DateTimeConverter, true)
    RequestDate: Date = undefined as any;

    @JsonProperty('Status', StringConverter, true)
    Status: string = undefined as any;

    @JsonProperty('CreatedBy', NumberConverter, true)
    CreatedBy: number = undefined as any;

    @JsonProperty('ApprovedBy', NumberConverter, true)
    ApprovedBy: number = undefined as any;

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('Notes', StringConverter, true)
    Notes: string = undefined as any;

    @JsonProperty('DepartmentReceiveId', NumberConverter, true)
    DepartmentReceiveId: number = undefined as any;

    @JsonProperty('DepartmentRatingId', NumberConverter, true)
    DepartmentRatingId: number = undefined as any;

    @JsonProperty('StatusSummary', NumberConverter, true)
    StatusSummary: number = undefined as any;

    @JsonProperty('Name', StringConverter, true)
    Name: string = undefined as any;

    @JsonProperty('NoteSummary', StringConverter, true)
    NoteSummary: string = undefined as any;

    @JsonProperty('ApprovedByNavigation', UserConverter, true)
    ApprovedByNavigation: User = undefined as any;

    @JsonProperty('CreatedByNavigation', UserConverter, true)
    CreatedByNavigation: User = undefined as any;

    @JsonProperty('Department', DepartmentConverter, true)
    Department: Department = undefined as any;

    @JsonProperty('DepartmentRating', DepartmentConverter, true)
    DepartmentRating: Department = undefined as any;

    @JsonProperty('DepartmentReceive', DepartmentConverter, true)
    DepartmentReceive: Department = undefined as any;

    @JsonProperty('Order', OrderConverter, true)
    Order: Order = undefined as any;

    @JsonProperty('InventoryTransactions', InventoryTransactionArrayConverter, true)
    InventoryTransactions: InventoryTransaction[] = [] as any;

    @JsonProperty('RequestDetails', RequestDetailArrayConverter, true)
    RequestDetails: RequestDetail[] = [] as any;

}

@JsonObject('RequestDetail')
export class RequestDetail {

    @JsonProperty('RequestDetailId', NumberConverter, true)
    RequestDetailId: number = undefined as any;

    @JsonProperty('RequestId', NumberConverter, true)
    RequestId: number = undefined as any;

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('Quantity', NumberConverter, true)
    Quantity: number = undefined as any;

    @JsonProperty('MaterialText', StringConverter, true)
    MaterialText: string = undefined as any;

    @JsonProperty('Measure', StringConverter, true)
    Measure: string = undefined as any;

    @JsonProperty('Note', StringConverter, true)
    Note: string = undefined as any;

    @JsonProperty('Material', MaterialConverter, true)
    Material: Material = undefined as any;

    @JsonProperty('Request', RequestConverter, true)
    Request: Request = undefined as any;

}

@JsonObject('Role')
export class Role {

    @JsonProperty('RoleId', NumberConverter, true)
    RoleId: number = undefined as any;

    @JsonProperty('RoleName', StringConverter, true)
    RoleName: string = undefined as any;

    @JsonProperty('UserRoles', UserRoleArrayConverter, true)
    UserRoles: UserRole[] = [] as any;

}

@JsonObject('WarehouseSource')
export class WarehouseSource {

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('WarehouseName', StringConverter, true)
    WarehouseName: string = undefined as any;

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('Location', StringConverter, true)
    Location: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Type', NumberConverter, true)
    Type: number = undefined as any;

    @JsonProperty('CreatedBy', NumberConverter, true)
    CreatedBy: number = undefined as any;

    @JsonProperty('Status', NumberConverter, true)
    Status: number = undefined as any;

    @JsonProperty('CreatedByNavigation', UserConverter, true)
    CreatedByNavigation: User = undefined as any;

    @JsonProperty('Department', DepartmentConverter, true)
    Department: Department = undefined as any;

    @JsonProperty('Warehouses', WarehouseArrayConverter, true)
    Warehouses: Warehouse[] = [] as any;

}

@JsonObject('Supplier')
export class Supplier {

    @JsonProperty('SupplierId', NumberConverter, true)
    SupplierId: number = undefined as any;

    @JsonProperty('SupplierName', StringConverter, true)
    SupplierName: string = undefined as any;

    @JsonProperty('ContactPerson', StringConverter, true)
    ContactPerson: string = undefined as any;

    @JsonProperty('PhoneNumber', StringConverter, true)
    PhoneNumber: string = undefined as any;

    @JsonProperty('Email', StringConverter, true)
    Email: string = undefined as any;

    @JsonProperty('Address', StringConverter, true)
    Address: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Orders', OrderArrayConverter, true)
    Orders: Order[] = [] as any;

}

@JsonObject('Detail')
export class Detail {

    @JsonProperty('DetailId', NumberConverter, true)
    DetailId: number = undefined as any;

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('SltheoCt', NumberConverter, true)
    SltheoCt: number = undefined as any;

    @JsonProperty('Slthuc', NumberConverter, true)
    Slthuc: number = undefined as any;

    @JsonProperty('DonGia', NumberConverter, true)
    DonGia: number = undefined as any;

    @JsonProperty('MaLo', StringConverter, true)
    MaLo: string = undefined as any;

    @JsonProperty('ThanhTien', NumberConverter, true)
    ThanhTien: number = undefined as any;

    @JsonProperty('Material', MaterialConverter, true)
    Material: Material = undefined as any;

    @JsonProperty('Warehouse', WarehouseConverter, true)
    Warehouse: Warehouse = undefined as any;

}

@JsonObject('User')
export class User {

    @JsonProperty('UserId', NumberConverter, true)
    UserId: number = undefined as any;

    @JsonProperty('Username', StringConverter, true)
    Username: string = undefined as any;

    @JsonProperty('PasswordHash', StringConverter, true)
    PasswordHash: string = undefined as any;

    @JsonProperty('FullName', StringConverter, true)
    FullName: string = undefined as any;

    @JsonProperty('Email', StringConverter, true)
    Email: string = undefined as any;

    @JsonProperty('PhoneNumber', StringConverter, true)
    PhoneNumber: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Status', BooleanConverter, true)
    Status: boolean = undefined as any;

    @JsonProperty('Gender', BooleanConverter, true)
    Gender: boolean = undefined as any;

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('Department', DepartmentConverter, true)
    Department: Department = undefined as any;

    @JsonProperty('OrderApprovedByNavigations', OrderArrayConverter, true)
    OrderApprovedByNavigations: Order[] = [] as any;

    @JsonProperty('OrderCreatedByNavigations', OrderArrayConverter, true)
    OrderCreatedByNavigations: Order[] = [] as any;

    @JsonProperty('RequestApprovedByNavigations', RequestArrayConverter, true)
    RequestApprovedByNavigations: Request[] = [] as any;

    @JsonProperty('RequestCreatedByNavigations', RequestArrayConverter, true)
    RequestCreatedByNavigations: Request[] = [] as any;

    @JsonProperty('UserRoles', UserRoleArrayConverter, true)
    UserRoles: UserRole[] = [] as any;

    @JsonProperty('WarehouseSources', WarehouseSourceArrayConverter, true)
    WarehouseSources: WarehouseSource[] = [] as any;

    @JsonProperty('Warehouses', WarehouseArrayConverter, true)
    Warehouses: Warehouse[] = [] as any;

}

@JsonObject('UserRole')
export class UserRole {

    @JsonProperty('RoleId', NumberConverter, true)
    RoleId: number = undefined as any;

    @JsonProperty('Id', NumberConverter, true)
    Id: number = undefined as any;

    @JsonProperty('UserId', NumberConverter, true)
    UserId: number = undefined as any;

    @JsonProperty('Role', RoleConverter, true)
    Role: Role = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

}

@JsonObject('Warehouse')
export class Warehouse {

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('WarehouseName', StringConverter, true)
    WarehouseName: string = undefined as any;

    @JsonProperty('DepartmentId', NumberConverter, true)
    DepartmentId: number = undefined as any;

    @JsonProperty('Location', StringConverter, true)
    Location: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Billdate', DateTimeConverter, true)
    Billdate: Date = undefined as any;

    @JsonProperty('Billnumber', StringConverter, true)
    Billnumber: string = undefined as any;

    @JsonProperty('Status', NumberConverter, true)
    Status: number = undefined as any;

    @JsonProperty('Createdby', NumberConverter, true)
    Createdby: number = undefined as any;

    @JsonProperty('Supplier', StringConverter, true)
    Supplier: string = undefined as any;

    @JsonProperty('Handoverrepresentative', StringConverter, true)
    Handoverrepresentative: string = undefined as any;

    @JsonProperty('Reason', StringConverter, true)
    Reason: string = undefined as any;

    @JsonProperty('Notes', StringConverter, true)
    Notes: string = undefined as any;

    @JsonProperty('Kho', NumberConverter, true)
    Kho: number = undefined as any;

    @JsonProperty('CreatedbyNavigation', UserConverter, true)
    CreatedbyNavigation: User = undefined as any;

    @JsonProperty('Department', DepartmentConverter, true)
    Department: Department = undefined as any;

    @JsonProperty('KhoNavigation', WarehouseSourceConverter, true)
    KhoNavigation: WarehouseSource = undefined as any;

    @JsonProperty('Details', DetailArrayConverter, true)
    Details: Detail[] = [] as any;

    @JsonProperty('InventoryTransactions', InventoryTransactionArrayConverter, true)
    InventoryTransactions: InventoryTransaction[] = [] as any;

    @JsonProperty('Materials', MaterialArrayConverter, true)
    Materials: Material[] = [] as any;

    @JsonProperty('WarehouseReports', WarehouseReportArrayConverter, true)
    WarehouseReports: WarehouseReport[] = [] as any;

}

@JsonObject('WarehouseReport')
export class WarehouseReport {

    @JsonProperty('ReportId', NumberConverter, true)
    ReportId: number = undefined as any;

    @JsonProperty('WarehouseId', NumberConverter, true)
    WarehouseId: number = undefined as any;

    @JsonProperty('MaterialId', NumberConverter, true)
    MaterialId: number = undefined as any;

    @JsonProperty('StockQuantity', NumberConverter, true)
    StockQuantity: number = undefined as any;

    @JsonProperty('ReportDate', DateTimeConverter, true)
    ReportDate: Date = undefined as any;

    @JsonProperty('Material', MaterialConverter, true)
    Material: Material = undefined as any;

    @JsonProperty('Warehouse', WarehouseConverter, true)
    Warehouse: Warehouse = undefined as any;

}

@JsonObject('Commoncategory')
export class Commoncategory {

    @JsonProperty('Id', NumberConverter, true)
    Id: number = undefined as any;

    @JsonProperty('Name', StringConverter, true)
    Name: string = undefined as any;

    @JsonProperty('Code', StringConverter, true)
    Code: string = undefined as any;

    @JsonProperty('Type', NumberConverter, true)
    Type: number = undefined as any;

    @JsonProperty('Parentid', NumberConverter, true)
    Parentid: number = undefined as any;

    @JsonProperty('Parent', CommoncategoryConverter, true)
    Parent: Commoncategory = undefined as any;

    @JsonProperty('InverseParent', CommoncategoryArrayConverter, true)
    InverseParent: Commoncategory[] = [] as any;

}
