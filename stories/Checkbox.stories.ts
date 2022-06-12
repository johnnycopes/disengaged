// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from 'projects/ngx/src/public-api';

type CheckboxArgs = CheckboxComponent & { slot: string };

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
      declarations: [CheckboxComponent],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CheckboxArgs> = (args: CheckboxArgs) => ({
  props: args,
  template: `
    {{ args | json }}
    <ngx-checkbox
      [disabled]="disabled"
      [indeterminate]="indeterminate"
      [bold]="bold"
      [invertColors]="invertColors"
      [ngModel]="checked"
    >
      {{ slot }}
    </ngx-checkbox>
  `,
});

export const Default = Template.bind({});
Default.args = createArgs({
  slot: 'Click me!',
});

function createArgs({
  slot = '',
  checked = false,
  disabled = false,
  indeterminate = false,
  bold = false,
  invertColors = false,
} = {}) {
  return { slot, checked, disabled, indeterminate, bold, invertColors };
}
