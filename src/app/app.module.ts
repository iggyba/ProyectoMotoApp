import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import {Geolocation} from '@ionic-native/geolocation/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from '../environments/environment'
import { AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { FormsModule } from "@angular/forms";
import { AngularFireStorageModule } from "@angular/fire/storage";


import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,
  AngularFireStorageModule,AngularFireAuthModule,
  FormsModule, CustomFormsModule],
  providers: [
    StatusBar,
    SplashScreen, 
    Geolocation,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  },
    { provide: FirestoreSettingsToken, useValue: {}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
