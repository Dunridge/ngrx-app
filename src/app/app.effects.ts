import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {countActionsType, CountUpdatedAtAction} from './reducers/count/count.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  updatedAt$(): void {
    this.actions$.pipe(
      // listing all of the actions we're going to use
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        });
      })
    );
  }
}
