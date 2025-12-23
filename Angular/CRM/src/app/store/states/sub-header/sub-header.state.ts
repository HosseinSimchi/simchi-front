export interface SubHeaderState {
  infoItems: {
    name: string;
    iconName: string;
    totalNumber: string;
    profitNumber: string;
    arrowUpDownIcon: string;
    date: string;
    bgColorIconClass: string;
    textCssClass:string;
  }[];
}

export const initialStateSubHeader: SubHeaderState = {
  infoItems: [
    {
      name: 'کل مشتریان',
      iconName: 'ri-user-3-fill',
      totalNumber: '۸,۵۴۲',
      profitNumber: '+۱۲/۵ ٪',
      arrowUpDownIcon: 'ri-arrow-up-line ',
      date: 'این هفته',
      bgColorIconClass: 'bg-primary-transparent text-primary',
      textCssClass: 'text-success',
    },
    {
      name: 'منجر جدید',
      iconName: 'ri-group-fill',
      totalNumber: '۱۲/۳ هزار',
      profitNumber: '+۰.۸۷٪',
      arrowUpDownIcon: 'ri-arrow-up-line',
      date: 'این هفته',
      bgColorIconClass: 'bg-info-transparent text-info',
      textCssClass: 'text-success',
    },
    {
      name: 'میزان تبدیل',
      iconName: 'ri-exchange-fill',
      totalNumber: '۵,۲۳۰',
      profitNumber: '-۰.۳۴٪',
      arrowUpDownIcon: 'ri-arrow-down-line',
      date: 'این هفته',
      bgColorIconClass: 'bg-danger-transparent text-danger',
      textCssClass: 'text-danger',
    },
    {
      name: 'درآمد',
      iconName: 'ri-money-dollar-circle-fill',
      totalNumber: '۸۶,۰۰۰ هزار تومان',
      profitNumber: '+۲.۰۵٪',
      arrowUpDownIcon: 'ri-arrow-up-line',
      date: 'این هفته',
      bgColorIconClass: 'bg-success-transparent text-success',
      textCssClass: 'text-success',
    },
  ],
};
