import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
  ]
})
export class NgxModule { }
