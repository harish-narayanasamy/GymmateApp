import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss'],
})
export class ProPage implements OnInit {
  subscriptiontext="Only $4.99 per month"
  buttonname="Change to Yearly"
  constructor() { }

  ngOnInit() {
  }

  public text: string = 'Change to yearly';

  public changeText(text) {
   //alert(text)


   if(text=="Change to Yearly"){
    this.subscriptiontext="Only $54.99 per year"
    this.buttonname="Change to Monthly"
   }
   if(text=="Change to Monthly"){
    this.subscriptiontext="Only $4.99 per month"
    this.buttonname="Change to Yearly"
   }
  }


}
