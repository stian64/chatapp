import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './components/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyBVADSmN3HVtqaU3B_-mSM8vSPuLFDE1ug",
  authDomain: "chatapp-7f42c.firebaseapp.com",
  databaseURL: "https://chatapp-7f42c.firebaseio.com",
  projectId: "chatapp-7f42c",
  storageBucket: "chatapp-7f42c.appspot.com",
  messagingSenderId: "1031632593217",
  appId: "1:1031632593217:web:1592f38d513115ab3c41c0",
  measurementId: "G-5W8HM408FH"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: ChatComponent, pathMatch: 'full' }
    ]),
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
