import { createFeature, createReducer, on } from '@ngrx/store';
import { initialStatePost } from './post.state';
import { PostActions } from './app.actions';

export const postFeature = createFeature({
  name: 'post',
  reducer: createReducer(
    initialStatePost,
    on(PostActions.loadPostsSuccess, (state, { posts }) => ({
      ...state,
      posts,
    })),
    on(PostActions.loadPostsFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(PostActions.addPostSuccess, (state, { post }) => ({
      ...state,
      posts: [...state.posts, post],
    })),
    on(PostActions.addPostFailure, (state, { error }) => ({ ...state, error })),

    on(PostActions.deletePostSuccess, (state, { id }) => ({
      ...state,
      posts: state.posts.filter((p) => p.id !== id),
    })),
    on(PostActions.deletePostFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  ),
});
