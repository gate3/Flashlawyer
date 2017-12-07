import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import {PlaceholderComponent} from './placeholder/placeholder.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    
  title = 'app';

  @ViewChild('container') container:ElementRef

  @ViewChildren(PlaceholderComponent) placeHolderComponent:QueryList<PlaceholderComponent>

  placeHolder:Array<string> = ['name','price']

  placeHolders:Array<PlaceholderComponent> = []

  constructor(private cDref:ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.placeHolders = this.placeHolderComponent.toArray()
    this.placeHolders.forEach((p,i)=>{
      p.placeHolderText = this.placeHolder[i]
    })

    this.cDref.detectChanges()
  }

  SaveSim () {
    this.placeHolders.forEach((p,i)=>{
      console.log(p.placeHolderText)
    })
  }  

}
