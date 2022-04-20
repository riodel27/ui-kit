import Card from "./index";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    primary: { control: "color" },
    secondary: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  borderRadius: 4,
  flexDirection: "column",
};

export const RowDirection = Template.bind({});
RowDirection.args = {
  borderRadius: 4,
  flexDirection: "row",
};
