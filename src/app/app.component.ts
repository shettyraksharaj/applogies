import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applogies';
  public forgives:{value:boolean}[] = []
  public hasForgiven:boolean=false;
  @ViewChild('target') target: any;

  public onChoice = (value:boolean) =>{
    this.forgives.push({value:value});
    setTimeout(()=>{
      this.target.nativeElement.scrollIntoView({behavior: 'smooth'});
    },5000);
    if(value){
      this.hasForgiven = true;
    }

  }
  public getclass = ()=>{
    return this.hasForgiven? "pink":"";
  }
}
