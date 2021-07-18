import { Injectable } from '@angular/core';
import{ HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class KeyvalueService {
  baseURL : string = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook";
  fullkey : string;
  
  constructor() { }

  public getnewkey() {
    return new Promise((resolve, reject) => {
      fetch(this.baseURL + '/new', { method: 'POST' })
      .then(response => response.json(), error => reject(error))
      .then(key => {
          this.fullkey = key;
          resolve(this.fullkey);
        }
        );  
    });
  }
  public uploadstring(mesg: string) {
    return new Promise((resolve, reject)=>{fetch(this.baseURL + '/post?key=' + this.fullkey + '&msg=' + mesg, { method: 'POST' })
    .then(response => response.json(), error => reject(error))
    .then(data => {
      console.log(data);
      resolve(data);
  }
  )
  ;})
  };

  public downloadstring() {
    return new Promise((resolve, reject)=>{
    fetch(this.baseURL + '/get?key=' + this.fullkey)
          .then(response => response.json(), error => reject(error))
          .then(data => {
            console.log(data);
            var obj = JSON.parse(data);
            resolve(obj);
          })
  });
  };
}