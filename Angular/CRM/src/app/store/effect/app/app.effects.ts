import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostActions } from './app.actions';

@Injectable()
export class PostEffects {
  actions$ = inject(Actions);
  http = inject(HttpClient);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() =>
        this.http
          .get<any[]>('https://jsonplaceholder.typicode.com/posts')
          ?.pipe(
            map((posts) => PostActions.loadPostsSuccess({ posts })),
            catchError((error) => of(PostActions.loadPostsFailure({ error })))
          )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap((action) =>
        this.http
          .post<any>('https://jsonplaceholder.typicode.com/posts', action.post)
          .pipe(
            map((post) => PostActions.addPostSuccess({ post })),
            catchError((error) => of(PostActions.addPostFailure({ error })))
          )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap((action) =>
        this.http
          .delete(`https://jsonplaceholder.typicode.com/posts/${action.id}`)
          .pipe(
            map(() => PostActions.deletePostSuccess({ id: action.id })),
            catchError((error) => of(PostActions.deletePostFailure({ error })))
          )
      )
    )
  );
}
