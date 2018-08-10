import { Action } from '@ngrx/store';

export enum AppActions {
  Restart = '[App] Restart',
  RemoveQanta = '[App] RemoveQanta',
  AddQanta = '[App] AddQanta',
  AddRandomQanta = '[App] AddRandomQanta',
  UpdateHealth = '[App] UpdateHealth',
}

export class Restart implements Action {
  readonly type = AppActions.Restart;
}
export class RemoveQanta implements Action {
  readonly type = AppActions.RemoveQanta;
  constructor(public payload: string) {}
}
export class AddQanta implements Action {
  readonly type = AppActions.AddQanta;
  constructor(public payload: string) {}
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
  | RemoveQanta
  | AddQanta
  | AddRandomQanta
  | UpdateHealth;
