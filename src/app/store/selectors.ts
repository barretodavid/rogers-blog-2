import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UI, Post, Message } from './models';

export const selectUI = createFeatureSelector<State, UI>('ui');

export const selectError = createSelector(
  selectUI,
  ui => ui.error,
);

export const selectPosts = createFeatureSelector<State, Post[]>('posts');

export const selectMessages = createFeatureSelector<State, Message[]>(
  'messages',
);
