import { Component, Input, ChangeDetectionStrategy, HostBinding, ViewEncapsulation } from '@angular/core';

type ButtonStyle = 'primary' | 'secondary' | 'ternary' | 'danger';

@Component({
  selector: '[ngx-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() buttonStyle: ButtonStyle = 'primary';

  @HostBinding('class')
  public get hostClasses(): { [key: string]: boolean } {
    console.log('works?');
    return {
      'ngx-button': true,
      [`ngx-button--${this.buttonStyle}`]: true,
    };
  }
}
