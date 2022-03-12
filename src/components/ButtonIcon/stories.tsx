import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonIcon from '.'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    children: {
      type: 'string'
    }

  }
} as Meta

export const Default: Story = (args) => <ButtonIcon {...args} />

Default.args = {
  children: 'Get Started Now',
  tamanho: 'pequeno',
  color: 'blue'
}
