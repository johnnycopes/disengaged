import { Component, Input, ChangeDetectionStrategy, HostBinding, ViewEncapsulation } from '@angular/core';

type ButtonStyle = 'primary' | 'secondary' | 'ternary' | 'danger';

@Component({
  selector: '[jc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() buttonStyle: ButtonStyle = 'primary';

  @Input()
  @HostBinding('attr.type')
  public type: 'submit' | 'button' | 'reset' = 'button';

  @HostBinding('class')
  public get hostClasses(): { [key: string]: boolean } {
    return {
      'jc-button': true,
      [`jc-button--${this.buttonStyle}`]: true,
    };
  }
}
