import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent {
  @Input() text: string = '';
  @Input() icon!: IconDefinition;

  @Output() onClick = new EventEmitter()

  constructor() { }
  
  click() {
    this.onClick.emit()
  }
}
