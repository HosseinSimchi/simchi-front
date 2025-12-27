import { postFeature } from './effect/app/app.reducer';
import { counterFeature } from './states/counter/counter.reducer';
import { headerFeature } from './states/header/header.reducer';
import { notificationFeature } from './states/notification/notification.reducer';
import { recentActivityFeature } from './states/recent-activities/recent-activities.reducer';
import { subHeaderFeature } from './states/sub-header/sub-header.reducer';
import { themeFeature } from './states/theme/theme.reducer';
import { userInfoFeature } from './states/user-info/user-info.reducer';

export const AppReducers = {
  counter: counterFeature.reducer,
  header: headerFeature.reducer,
  notification: notificationFeature.reducer,
  userInfo: userInfoFeature.reducer,
  subHeader: subHeaderFeature.reducer,
  recentActivity: recentActivityFeature.reducer,
  post: postFeature.reducer,
  theme: themeFeature.reducer,
};
