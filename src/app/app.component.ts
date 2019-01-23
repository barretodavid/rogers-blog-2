import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './store/models';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { selectError } from './store/selectors';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>',
})
export class AppComponent implements OnInit, OnDestroy {
  error$: Observable<string>;
  sub: Subscription;

  constructor(private store: Store<State>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.error$ = this.store.pipe(
      select(selectError),
      filter(error => error !== ''),
    );

    this.sub = this.error$.subscribe(error => {
      this.snackBar.open(error, 'Dismiss');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
