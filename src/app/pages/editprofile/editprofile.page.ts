import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(private dataService: FirebaseService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f)
    this.dataService.postData(f.value.name, f.value.age, f.value.gender,f.value.Height,f.value.Weight)
      .then(res => {

        f.reset();
        console.log(res)

      }, err => {
        console.log(err)

      })

  }
}
