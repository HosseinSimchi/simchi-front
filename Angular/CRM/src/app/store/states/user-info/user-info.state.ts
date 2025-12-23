export interface UserInfoState {
  name: string;
  scrPath: string;
  dropdownMenuItems: {
    hrefPath: string;
    iconClass: string;
    name: string;
  }[];
}

export const initialStateUserInfo: UserInfoState = {
  name: 'حسین سیم چی',
  scrPath: 'assets/images/avatar/avatar-thumb-001.webp',
  dropdownMenuItems: [
    {
      name: 'مشخصات',
      hrefPath: 'app-user-account.html',
      iconClass: 'ri-user-line',
    },
    {
      name: 'برنامه ها و صورتحساب',
      hrefPath: 'app-user-billing.html',
      iconClass: 'ri-bank-card-line',
    },
    {
      name: 'تنظیمات مشخصات',
      hrefPath: 'app-user-security.html',
      iconClass: 'ri-settings-2-line',
    },
    {
      name: 'ورود به سیستم',
      hrefPath: 'auth-signin-basic.html',
      iconClass: 'ri-logout-circle-line',
    },
  ],
};
