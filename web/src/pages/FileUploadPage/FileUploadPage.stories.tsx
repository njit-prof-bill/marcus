import type { Meta, StoryObj } from '@storybook/react'

import FileUploadPage from './FileUploadPage'

const meta: Meta<typeof FileUploadPage> = {
  component: FileUploadPage,
}

export default meta

type Story = StoryObj<typeof FileUploadPage>

export const Primary: Story = {}
