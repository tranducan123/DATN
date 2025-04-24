import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    displayName: 'Quản lý phòng ban',
    iconName: 'archive',
    route: '/department',
  },
  {
    displayName:'Quản lý người dùng',
    iconName:'info-circle',
    route:'/manager-users'
  },
  {
    displayName: 'Quản lý danh mục ',
    iconName: 'list-details',
    children: [
          {
            displayName: 'Loại sản phẩm',
            iconName: 'point',
            route: '/category',
          },
          {
            displayName : 'Danh mục sản phẩm',
            iconName: 'file-text-ai',
            route : '/material'
          },
          {
            displayName : 'Nhóm tham số dùng chung',
            iconName: 'clipboard-text',
            route : '/parameter-group'
          },
          {
            displayName : 'Kho',
            iconName: 'clipboard-text',
            route : '/kho'
          },
          {
            displayName : 'Tham số dùng chung',
            iconName: 'table',
            route : '/parameter'
          }
        ]
  },
  {
    displayName:'Yêu cầu tổng hợp',
    iconName:'mood-smile',
    route:'/requirement'
  },
  {
    displayName: 'Quản lý kho',
    iconName: 'mood-smile',
    children: [
      {
        displayName: 'Nhập kho',
        iconName: 'brand-dribbble',
        route: '/warehouse',
      },
    ]
    // route: '/warehouse',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'archive',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'file-text',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'file-text-ai',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },

  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'brand-dribbble',
    route: '/extra/sample-page',
  },
  {
    navCap: 'Forms',
  },

];
