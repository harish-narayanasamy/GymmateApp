import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  profile = { name: '', age: '', gender: '', height: '', weight: '' };

  constructor(private dataService: FirebaseService,private router: Router,private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.getdata()


  }
  async getdata() {
    let det = await this.dataService.getData()
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
}
