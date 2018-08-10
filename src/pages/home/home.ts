import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import {
  AddRandomQanta,
  Restart,
  UpdateHealth,
  UpdateQanta,
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
            value: health,
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Update',
            handler: ({ amount }: any) => {
              this.store.dispatch(new UpdateHealth(parseInt(amount)));
            },
          },
        ],
      })
      .present();
  }

  updateQanta(type: string, value: string) {
    this.alertCtrl
      .create({
        title: type,
        inputs: [
          {
            name: 'amount',
            type: 'number',
            min: '0',
            max: '75',
            value: value,
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Update',
            handler: ({ amount }: any) => {
              this.store.dispatch(
                new UpdateQanta({ type, value: parseInt(amount) }),
              );
            },
          },
        ],
      })
      .present();
  }

  addRandomQanta() {
    this.store.dispatch(new AddRandomQanta(3));
  }
}
