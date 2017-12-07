// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
// This Module's Components
import { PlaceholderComponent } from './placeholder.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PlaceholderComponent,
    ],
    exports: [
        PlaceholderComponent,
    ]
})
export class PlaceholderModule {

}
