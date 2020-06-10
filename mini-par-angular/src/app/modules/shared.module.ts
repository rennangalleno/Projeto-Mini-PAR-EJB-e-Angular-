import { NgModule } from '@angular/core';
import { ShowMessageFieldComponent } from '../components/shared/show-message-field/show-message-field.component';
import { FormDebugComponent } from '../components/shared/form-debug/form-debug.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ShowMessageFieldComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowMessageFieldComponent,
    FormDebugComponent
  ]
})
export class SharedModule { }
