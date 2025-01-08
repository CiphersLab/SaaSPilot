import { NavItem } from '../types/index';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    isActive: false,
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Feature 1',
    url: '/dashboard/f-1',
    icon: 'history',
    isActive: false,
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Feature 2',
    url: '/dashboard/f-2',
    icon: 'settings',
    isActive: false,
    items: [] // Empty array as there are no child items for Dashboard
  },
];
