import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { L10n } from '@syncfusion/ej2-base';
L10n.load({
  'en-US': {
    grid: {
      SaveButton: 'Lưu',
      CancelButton: 'Hủy',
      AddButton: 'Thêm',
      Edit: 'Sửa',
      Add: 'Thêm ',
      Delete: 'Xóa',
      Update: 'Cập nhật',
      Cancel: 'Hủy',
      EditOperationAlert: 'Hãy chọn một mục để sửa.',
      DeleteOperationAlert: 'Hãy chọn một mục để xóa',
      EmptyRecord: 'Không có dữ liệu để hiển thị.',
      FilterButton: 'Lọc',
      ClearButton: 'Xóa',
      EnterValue: 'Nhập giá trị',
      ChooseDate: 'Chọn ngày',
    },
    datepicker: { day: 'Ngày', month: 'Tháng', year: 'Năm' },
    dropdowns: {
      noRecordsTemplate: 'Không có dữ liệu.',
    },
    pager: {
      pagerDropDown : 'Số lượng bản ghi trong 1 trang',
      // totalItemsInfo:'{0} bản ghi',
      // currentPageInfo : '{0} trên {1} trang'
    }
  },
});

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./pages/department/department.module').then((m) => m.DepartmentModule),
      },
      {
        path:'manager-users',
        loadChildren: () =>
          import('./pages/manager-user/manager-user.module').then((m)=>m.ManagerUserModule),

      },
      {
        path:'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m)=>m.ProfileModule),

      },
      {
        path:'kho',
        loadChildren: () =>
          import('./pages/kho/kho.module').then((m)=>m.KhoModule),

      },
      {
        path:'warehouse',
        loadChildren: () =>
          import('./pages/warehouse/warehouse.module').then((m)=>m.WarehouseModule),

      },
      {
        path:'category',
        loadChildren: () =>
          import('./pages/category/category.module').then((m)=>m.CategoryModule),

      },
      {
        path:'material',
        loadChildren: () =>
          import('./pages/material/material.module').then((m)=>m.MaterialModule),

      },
      {
        path:'parameter-group',
        loadChildren: () =>
          import('./pages/parameter-group/parameter-group.module').then((m) => m.ParameterGroupModule),
      },
      {
        path:'parameter',
        loadChildren: () =>
          import('./pages/parameter/parameter.module').then((m) => m.ParameterModule),
      },
      {
        path:'requirement',
        loadChildren: () =>
          import('./pages/requirement/requirement.module').then((m) => m.RequirementModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
