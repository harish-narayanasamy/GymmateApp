import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { AdmobService } from '../../services/admob.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
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
        alert(res)
        console.log("start2")

      }, err => {
        console.log("start3")

       alert(err)
      })

  }
}
