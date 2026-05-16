import { application_routes } from './routes';

export const LOGO_IMG_URL = 'images/logo.png';

export const NAVBAR_ITEMS = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'home',
    path: application_routes.DASHBOARD,
  },
  {
    id: 2,
    name: 'Transactions',
    icon: 'transfer',
    path: application_routes.TRANSACTIONS,
  },
  {
    id: 3,
    name: 'Accounts',
    icon: 'user',
    path: application_routes.ACCOUNTS,
  },
  {
    id: 4,
    name: 'Investments',
    icon: 'economic-investment',
    path: application_routes.INVESTMENTS,
  },
  {
    id: 5,
    name: 'Credit Cards',
    icon: 'credit-card',
    path: application_routes.CREDIT_CARDS,
  },
  {
    id: 6,
    name: 'Loans',
    icon: 'loan',
    path: application_routes.LOANS,
  },
  {
    id: 7,
    name: 'Services',
    icon: 'service',
    path: application_routes.SERVICES,
  },
  {
    id: 8,
    name: 'My Privileges',
    icon: 'econometrics',
    path: application_routes.MY_PRIVILAGES,
  },
  {
    id: 9,
    name: 'Setting',
    icon: 'settings_solid',
    path: application_routes.SETTINGS,
  },
];
