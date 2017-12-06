import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { ShowpagePage } from '../pages/showpage/showpage';

import { EditPersonPage } from '../pages/edit-person/edit-person';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const config = {
  apiKey: "AIzaSyB3Gzj5qKZR93LNchVAANQ1vMqs6_uni2k",
  authDomain: "ionicdb-eb9dc.firebaseapp.com",
  databaseURL: "https://ionicdb-eb9dc.firebaseio.com",
  projectId: "ionicdb-eb9dc",
  storageBucket: "ionicdb-eb9dc.appspot.com",
  messagingSenderId: "324746435465"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage,
    ShowpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage,
    ShowpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
