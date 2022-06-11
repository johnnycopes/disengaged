// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/disengaged/src/lib/button/button.component';

type ButtonArgs = ButtonComponent & { slot: string };

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonArgs> = (args: ButtonArgs) => ({
  props: args,
  template: `
    <button jc-button
      [type]="type"
    >
      {{ slot }}
    </button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  slot: 'Click me!',
  type: 'button',
};
