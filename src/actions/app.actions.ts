import { Action } from '@ngrx/store';

export enum AppActions {
  Restart = '[App] Restart',
  UpdateQanta = '[App] UpdateQanta',
  AddRandomQanta = '[App] AddRandomQanta',
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

export type AppActionsUnion = Restart | UpdateQanta | AddRandomQanta;
