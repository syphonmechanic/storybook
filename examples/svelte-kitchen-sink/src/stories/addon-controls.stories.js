import ButtonView from './views/ButtonView.svelte';

export default {
  title: 'Addon/Controls',
  component: ButtonView,
};

const Template = (args) => ({
  Component: ButtonView,
  props: args,
});

export const Rounded = Template.bind({});
// Rounded.args = {
//   rounded: true,
//   text: 'Rounded text',
//   bleh: 'ss',
// };

export const Square = Template.bind({});
// Square.args = {
//   rounded: false,
//   text: 'Squared text',
// };

export const Test = Template.bind({});
