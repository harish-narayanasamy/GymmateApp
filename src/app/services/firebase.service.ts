import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService }         from '../services/auth.service'
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) { }

  unsubscribeOnLogOut() {
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  getDisplayName() {
    const user = firebase.auth().currentUser;
    if (user != null) {
      return user.displayName;
    }
  }

  getCreationTime() {
    const user = firebase.auth().currentUser;
    if (user != null) {
      return user.metadata.creationTime;
    }
  }
  async profileData(name, age, gender, height, weight) {
 
    let uid = await firebase.auth().currentUser.uid;
    return new Promise<any>((resolve, reject) => {
      this.afDb.database.ref('profile/'+uid).set({
        name: name, age: age, gender: gender, height: height, weight: weight
      })
        .then(res => {
          resolve(res);
        },
          err => reject(err))
    })
  }

  async profileImage(url) {
 
    let uid = await firebase.auth().currentUser.uid;
    return new Promise<any>((resolve, reject) => {
      this.afDb.database.ref('profileImage/'+uid).set({
        url:url
      })
        .then(res => {
          resolve(res);
        },
          err => reject(err))
    })
  }

  async getprofileImage() {
    let uid = await firebase.auth().currentUser.uid;

  
      return new Promise<any>((resolve, reject) => {
        this.afDb.database.ref('profileImage/'+uid).on("value", function (snapshot) {
          console.log(snapshot.val());
          resolve (snapshot.val());
      
        }, function (errorObject) {
          console.log("The read failed: " + errorObject);
        });
      })

  }

  async getData() {
    let uid = await firebase.auth().currentUser.uid;

  
      return new Promise<any>((resolve, reject) => {
        this.afDb.database.ref('profile/'+uid).on("value", function (snapshot) {
          console.log(snapshot.val());
          resolve (snapshot.val());
      
        }, function (errorObject) {
          console.log("The read failed: " + errorObject);
        });
      })

  }



}
