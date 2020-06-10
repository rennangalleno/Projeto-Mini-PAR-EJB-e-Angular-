import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-message-field',
  templateUrl: './show-message-field.component.html'
})
export class ShowMessageFieldComponent {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;
  
}
