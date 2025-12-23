export interface RecentActivityState {
  name: string;
  btnText: string;
  activityList: {
    id: number;
    iocnClass: string;
    cssStyles: string;
    name: string;
    description: string;
    date: string;
  }[];
}

export const initialRecentActivity: RecentActivityState = {
  name: 'فعالیت اخیر',
  btnText: 'مشاهده همه',
  activityList: [
    {
      id: 1,
      iocnClass: 'ri-check-line',
      cssStyles: 'avatar bg-success-transparent text-success',
      name: 'معامله جدید بسته شد',
      description: 'Acme Corp - ۱۲،۵۰۰ تومان',
      date: '۲ ساعت پیش',
    },
    {
      id: 2,
      iocnClass: 'ri-user-add-line',
      cssStyles: 'avatar bg-primary-transparent text-primary',
      name: 'مشتری جدید اضافه شد',
      description: 'جان اسمیت از Techsolutions',
      date: '۵ ساعت پیش',
    },
    {
      id: 3,
      iocnClass: 'ri-chat-new-line',
      cssStyles: 'avatar bg-info-transparent text-info',
      name: 'مکالمه سرب جدید',
      description: 'گپ زنده با سارا جانسون',
      date: 'امروز',
    },
    {
      id: 4,
      iocnClass: 'ri-task-line',
      cssStyles: 'avatar bg-purple-transparent text-purple',
      name: 'کار کامل شد',
      description: 'با مشتری بالقوه پیگیری کنید',
      date: 'دیروز',
    },
    {
      id: 5,
      iocnClass: 'ri-close-line',
      cssStyles: 'avatar bg-danger-transparent text-danger',
      name: 'معامله از دست رفته',
      description: 'شرکت های جهانی - ۸۰۰۰ تومان',
      date: 'دو روز پیش',
    },
  ],
};
