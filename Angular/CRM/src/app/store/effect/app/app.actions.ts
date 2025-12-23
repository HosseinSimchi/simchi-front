import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PostActions = createActionGroup({
  source: 'Post',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ posts: any[] }>(),
    'Load Posts Failure': props<{ error: any }>(),

    'Add Post': props<{ post: any }>(),
    'Add Post Success': props<{ post: any }>(),
    'Add Post Failure': props<{ error: any }>(),

    'Delete Post': props<{ id: number }>(),
    'Delete Post Success': props<{ id: number }>(),
    'Delete Post Failure': props<{ error: any }>(),
  },
});
