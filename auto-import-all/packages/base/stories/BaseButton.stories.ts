import type { Meta, StoryObj } from '@storybook-vue/nuxt'

import BaseButton from './../components/BaseButton.vue'

const meta = {
  title: 'BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  render: () => ({
    components: {BaseButton},
    template: `<BaseButton>Button</BaseButton>`
  })

} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
