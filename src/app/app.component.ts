import { Component, VERSION } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Post-it in Angular ' + VERSION.major;
  postits: Array<postit>;
  msg : string;
  constructor (private kvs: KeyvalueService) {}
  chiave: string;
  generaChiave() {
    this.postits=[];
    this.kvs.getnewkey().then(
      (val: string) => this.chiave=val,
      (err) => console.error(err)
    );
   }
   
   carica(s:string) {
     this.kvs.fullkey=s;
     this.chiave=s;
     this.kvs.downloadstring().then(
      (val: Array<postit>)=>this.postits=val,
      (err)=>console.error(err)
     );
   }

   addPostit(newPostit: postit) {
    this.postits.push(newPostit);
    this.msg = JSON.stringify(this.postits);
    this.kvs.uploadstring(this.msg).then(
      (val)=>console.log(val),
      (err)=>console.error(err)
     ).then(uploaded =>
     {this.kvs.downloadstring().then(
      (value: Array<postit>)=>this.postits=value,
      (err)=>console.error(err)
     )});
  };

  delPostit(p: postit) {
    const index: number = this.postits.indexOf(p);
    if (index !== -1) {
        this.postits.splice(index, 1);
        this.msg = JSON.stringify(this.postits);
        this.kvs.uploadstring(this.msg).then(
          (val)=>console.log(val),
          (err)=>console.error(err)
         ).then(uploaded =>
         {this.kvs.downloadstring().then(
          (value: Array<postit>)=>this.postits=value,
          (err)=>console.error(err)
         )});
    }
    if (this.mostratimp!=undefined) {
      const mindex: number = this.mostratimp.indexOf(p);
      if (mindex !== -1) {
      this.mostratimp.splice(mindex, 1);
      }
    }
  }
  mostratimp: Array<postit>;
  showp(e: Element, p: postit) {
    if (e.innerHTML=='') e.innerHTML=p.postitcontent;
    else e.innerHTML='';
  }
  showimp() {if (this.mostratimp==undefined){
    let found:Array<postit> = this.postits.filter(
      el => (el.postimp === true)
    );
    this.mostratimp=found;
    this.msg=JSON.stringify(this.mostratimp);
  }
  else {
    this.mostratimp=undefined;
    this.msg=JSON.stringify(this.postits);
  }
  }
}

export class postit {postittitle: string;
postitcontent: string;
postimp: boolean;
constructor(postittitle: string, postitcontent: string, postimp: boolean) {this.postittitle=postittitle;
this.postitcontent=postitcontent;
this.postimp=postimp;}
}