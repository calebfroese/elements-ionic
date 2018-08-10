import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { getQanta } from '../../reducers';
import { UpdateQanta } from '../../actions/app.actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  qanta$: Observable<any>;

  constructor(public store: Store<any>, public alertCtrl: AlertController) {}

  ngOnInit() {
    this.qanta$ = this.store.select(getQanta);
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
}
