import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

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
  postData(name, age, gender, height, weight) {
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(height)
    console.log(weight)

    return new Promise<any>((resolve, reject) => {
      this.afDb.database.ref('posts/').push({
        name: name, age: age, gender: gender, height: height, weight: weight
      })
        .then(res => {
          resolve(res);
        },
          err => reject(err))
    })
  }
}
