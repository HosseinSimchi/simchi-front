export interface NotificationState {
  newMessages: string;
  title: string;
  notificationItems: {
    src: string;
    title: string;
    desc: string;
    date: string;
  }[];
  btnText: string;
}

export const initialStateNotification: NotificationState = {
  newMessages: '۸ جدید',
  title: 'اعلان',
  notificationItems: [
    {
      src: 'assets/images/avatar/avatar-thumb-001.webp',
      title: 'سفارش جدید دریافت شده است',
      desc: 'سفارش شماره 14523 توسط جمشید ایرانیی قرار داده شده است',
      date: 'همین الان',
    },
    {
      src: 'assets/images/avatar/avatar-thumb-002.webp',
      title: 'هشدار سهام کم ⚠',
      desc: 'فقط 3 مورد برای "Smartwatch Pro X" در انبار باقی مانده است',
      date: '10 دقیقه پیش',
    },
    {
      src: 'assets/images/avatar/avatar-thumb-003.webp',
      title: 'مشتری جدید ثبت شده',
      desc: 'سارا ویلیامز به فروشگاه شما پیوسته است',
      date: '30 دقیقه پیش',
    },
    {
      src: 'assets/images/avatar/avatar-thumb-004.webp',
      title: 'بررسی محصول',
      desc: '"گوشواره های بی سیم" یک بررسی جدید 5 ستاره دریافت کرد',
      date: '1 ساعت پیش',
    },
    {
      src: 'assets/images/avatar/avatar-thumb-004.webp',
      title: 'بررسی محصول',
      desc: '"گوشواره های بی سیم" یک بررسی جدید 5 ستاره دریافت کرد',
      date: '1 ساعت پیش',
    },
    {
      src: 'assets/images/avatar/avatar-thumb-005.webp',
      title: 'گزارش فروش هفتگی',
      desc: 'فروش فروشگاه شما در این هفته 18 ٪ افزایش یافته است',
      date: '3 ساعت پیش',
    },
  ],
  btnText: 'مشاهده همه اعلان ها',
};
