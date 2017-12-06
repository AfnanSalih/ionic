import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  peoplelist:AngularFireList<any>;

  constructor(public navCtrl: NavController , public db:AngularFireDatabase) {
   this.peoplelist = db.list('people');
  }
  createPerson(firstName,lastName,country,city,phone,salary,email){
    this.peoplelist.push({
      key_id: new Date().getTime(),
      firstName:firstName,
      lastName:lastName,
      country:country,
      city:city,
      phone: phone,
      salary: salary,
      email:email
    }).then(newPerson =>{
      this.navCtrl.push(HomePage);
    },error=>{console.log(error);});
  }
}
