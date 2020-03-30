import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  profile;
  name;

  constructor(private dataService: FirebaseService) { }

  ngOnInit() {
    this.name = "harish"
    this.getdata()
  }

  async getdata() {
    console.log("working")
    await this.dataService.getData()

  }
  onSubmit(f: NgForm) {
    console.log(f)
    this.dataService.profileData(f.value.name, f.value.age, f.value.gender, f.value.Height, f.value.Weight)
      .then(res => {

        f.reset();
        console.log(res)

      }, err => {
        console.log(err)

      })

  }
}
