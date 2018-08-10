import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import {
  AddQanta,
  AddRandomQanta,
  RemoveQanta,
  Restart,
  UpdateHealth,
} from '../../actions/app.actions';
import { getHealth, getQanta } from '../../reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  qanta$: Observable<any>;
  health$: Observable<any>;

  constructor(public store: Store<any>, public alertCtrl: AlertController) {}

  ngOnInit() {
    this.qanta$ = this.store.select(getQanta);
    this.health$ = this.store.select(getHealth);
  }

  restartGame() {
    this.store.dispatch(new Restart());
  }

  updateHealth(health: string) {
    this.alertCtrl
      .create({
        title: 'Update Health',
        inputs: [
          {
            name: 'amount',
            type: 'number',
            min: '0',
            max: '100',
          },
        ],
        buttons: [
          {
            text: 'Add',
            handler: ({ amount }: any) => {
              this.store.dispatch(new UpdateHealth(parseInt(amount || 0)));
            },
          },
          {
            text: 'Subtract',
            handler: ({ amount }: any) => {
              this.store.dispatch(new UpdateHealth(-parseInt(amount || 0)));
            },
          },
        ],
      })
      .present();
  }

  add(type: string) {
    this.store.dispatch(new AddQanta(type));
  }

  remove(type: string) {
    this.store.dispatch(new RemoveQanta(type));
  }

  addRandomQanta() {
    this.store.dispatch(new AddRandomQanta(3));
  }
}
