import { Action } from '@ngrx/store';

export enum AppActions {
  Restart = '[App] Restart',
}

export class Restart implements Action {
  readonly type = AppActions.Restart;
}

export type AppActionsUnion = Restart;
