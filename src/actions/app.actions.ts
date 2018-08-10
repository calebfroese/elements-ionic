import { Action } from '@ngrx/store';

export enum AppActions {
  Restart = '[App] Restart',
  UpdateQanta = '[App] UpdateQanta',
  AddRandomQanta = '[App] AddRandomQanta',
  UpdateHealth = '[App] UpdateHealth',
}

export class Restart implements Action {
  readonly type = AppActions.Restart;
}
export class UpdateQanta implements Action {
  readonly type = AppActions.UpdateQanta;
  constructor(public payload: { type: string; value: number }) {}
}
export class AddRandomQanta implements Action {
  readonly type = AppActions.AddRandomQanta;
  constructor(public payload: number) {}
}
export class UpdateHealth implements Action {
  readonly type = AppActions.UpdateHealth;
  constructor(public payload: number) {}
}

export type AppActionsUnion =
  | Restart
  | UpdateQanta
  | AddRandomQanta
  | UpdateHealth;
