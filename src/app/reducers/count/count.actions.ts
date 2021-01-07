import {Action} from '@ngrx/store';

export enum countActionsType {
  increase = '[COUNT] Increase',
  decrease = '[COUNT] Decrease',
  clear = '[COUNT] Clear'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export type CountActions =
  CountIncreaseAction |
  CountDecreaseAction |
  CountClearAction;
