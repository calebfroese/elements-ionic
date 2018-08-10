import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { getQanta } from '../../reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  qanta$: Observable<any>;

  constructor(public store: Store<any>, public navCtrl: NavController) {}

  ngOnInit() {
    this.qanta$  = this.store.select(getQanta);
  }
}
