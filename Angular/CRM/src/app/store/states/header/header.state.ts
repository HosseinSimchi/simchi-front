export interface HeaderState {
  searchPlaceholder: string;
  languageSelection: {
    src: string;
    name: string;
  }[];
}

export const initialStateHeader: HeaderState = {
  searchPlaceholder: 'جستجو ...',
  languageSelection: [
    { src: 'assets/images/flags/us-flag.jpg', name: 'انگلیسی' },
  ],
};
