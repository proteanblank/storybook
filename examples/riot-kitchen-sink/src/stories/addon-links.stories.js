import { tag, mount, storiesOf } from '@storybook/riot';
import { linkTo } from '@storybook/addon-links';
import ButtonRaw from './Button.txt';
import { compileNow } from './compileNow';

compileNow(tag, ButtonRaw);

storiesOf('Addon|Links', module).add('Go to welcome', () =>
  mount('my-button', {
    rounded: true,
    content: 'This button links to Welcome',
    value: 'with a parameter',
    handleClick: linkTo('Welcome', 'Welcome'),
  })
);
