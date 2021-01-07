import { Component } from '@angular/core';
import {CountState} from './reducers/count/count.reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCount, selectUpdatedAt} from './reducers/count/count.selectors';
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from './reducers/count/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  constructor(
    private store$: Store<CountState>
  ) {
  }

  increase(): void {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease(): void {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear(): void {
    this.store$.dispatch(new CountClearAction());
  }
}
