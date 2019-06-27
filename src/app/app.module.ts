import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig } from '../environments/environment';

import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestoreDocument } from '@angular/fire/firestore';

import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { Camera } from "@ionic-native/camera/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { File } from '@ionic-native/file/ngx';
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from 'ng2-validation'
import { BackgroundMode } from "@ionic-native/background-mode/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    CustomFormsModule,
    BackgroundMode
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FCM,
    Camera,
    WebView,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  },
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
