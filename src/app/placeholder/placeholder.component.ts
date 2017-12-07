import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'placeholder',
    templateUrl: 'placeholder.component.html',
    styleUrls: ['placeholder.component.scss']
})
export class PlaceholderComponent{

    isEditMode:boolean = false

    @Input()
    placeHolderText:string = 'name';
    
    @ViewChild('editValue') editValue:ElementRef;

    toggleView () {
        if(this.isEditMode){
            this.placeHolderText = this.editValue.nativeElement.value
        }
        this.isEditMode = !this.isEditMode
    }
}
