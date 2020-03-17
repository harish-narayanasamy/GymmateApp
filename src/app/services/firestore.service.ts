import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {

  email: string;
  emailVerified: true

}

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  private itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = afs.collection<User>('users');
    this.items = this.itemsCollection.valueChanges();
  }

  addUser(uid, email, status, ) {
    this.afs.collection('users').doc(uid).set({
      email: email,
      subscribed: status
    }).then(function () {
      console.log("Document successfully written!");
    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  updateUser(uid, email, emailVerified, ) {
    this.afs.collection('users').doc(uid).update({
      email: email,
      emailVerified: emailVerified
    }).then(function () {
      console.log("Document successfully written!");
    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }


  getUser(uid) {
    var docRef = this.afs.collection('users').doc(uid);

    docRef.get().toPromise()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
  }
}




