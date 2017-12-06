import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 
import { AngularFireDatabase ,AngularFireList,AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase' ;

import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

persons:AngularFireList<any> ;
per:Observable<any[]>;

items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
size$: BehaviorSubject<string|null>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

   
    this.persons = db.list('/people');
    this.per=this.persons.valueChanges();

    this.size$ = new BehaviorSubject(null); 
    this.items$ = this.size$.switchMap(size => 
      db.list('/people', ref =>
      size ? ref.orderByChild('size').equalTo(size) : ref 
    ).snapshotChanges()
  );

  this.items$.subscribe(actions => {
    actions.forEach(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    })  ; 
 
  });

  }
  


  itemSelected(key, firstName, lastName, country, city, phone, salary, email){
    // console.log(key, firstName, lastName, country, city, phone, salary, email);
    this.navCtrl.push(ContactPage,{
      key : key,
      firstName : firstName,
      lastName : lastName,
      country : country,
      city : city , 
      phone : phone , 
      salary : salary , 
      email : email 
          });
   }





}
