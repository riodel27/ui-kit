import Card from "./index";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  borderRadius: 4,
};
