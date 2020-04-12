import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
export interface Image {
  id: string;
  image: string;
}
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})

export class EditprofilePage implements OnInit {

  profile = { name: '', age: '', gender: '', height: '', weight: '' };
  url="";
  newImage: Image = {
    id: this.afs.createId(), image: ''
  }
  loading: boolean = false;
  constructor(
    private dataService: FirebaseService,
    private router: Router,
    private navCtrl: NavController,
    private afs: AngularFirestore, 
    private storage: AngularFireStorage
    ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.getdata()


  }
  async getdata() {
    let det = await this.dataService.getData();
    let iurl = await this.dataService.getprofileImage();
    this.url=iurl.url
    this.profile.name = det.name;
    this.profile.age = det.age;
    this.profile.gender = det.gender;
    this.profile.height = det.height;
    this.profile.weight = det.weight
  }
  onSubmit(f: NgForm) {
    console.log(f.value.name, f.value.age, f.value.gender, f.value.Height, f.value.Weight)
    this.dataService.profileData(f.value.name, f.value.age, f.value.gender, f.value.Height, f.value.Weight)
      .then(res => {

        f.reset();
        this.navCtrl.navigateBack('/profile')

        console.log(res)

      }, err => {
        console.log(err)

      })

  }
  uploadImage(event) {
    this.loading = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
     
      reader.readAsDataURL(event.target.files[0]);
      // For Preview Of Image
      reader.onload = (e:any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      
        // For Uploading Image To Firebase
        const fileraw = event.target.files[0];
        console.log(fileraw)
        const filePath = '/Image/' + this.newImage.id + '/' + 'Image' + (Math.floor(1000 + Math.random() * 9000) + 1);
        const result = this.SaveImageRef(filePath, fileraw);
        const ref = result.ref;
        result.task.then(a => {
          ref.getDownloadURL().subscribe(a => {
            console.log(a);
            
            this.newImage.image = a;
            this.loading = false;
            this.dataService.profileImage(a)

          });

        //  this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);
        });
      }, error => {
        alert("Error");
      }

    }
  }



  SaveImageRef(filePath, file) {

    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  }
}



