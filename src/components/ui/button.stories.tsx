import type { Meta, StoryObj } from '@storybook/react'
import { Sprout, Leaf, Wheat } from 'lucide-react'

import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'sage', 'earth', 'moss'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

// Agriculture-themed variants
export const Sage: Story = {
  args: {
    variant: 'sage',
    children: 'Plant Seeds',
  },
}

export const Earth: Story = {
  args: {
    variant: 'earth',
    children: 'Check Soil',
  },
}

export const Moss: Story = {
  args: {
    variant: 'moss',
    children: 'Water Crops',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const Icon: Story = {
  args: {
    variant: 'sage',
    size: 'icon',
    children: <Sprout className="h-4 w-4" />,
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'earth',
    children: (
      <>
        <Leaf className="mr-2 h-4 w-4" />
        Harvest Ready
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: 'Loading...',
  },
}

export const AgricultureShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="sage">
        <Sprout className="mr-2 h-4 w-4" />
        Plant Seeds
      </Button>
      <Button variant="earth">
        <Leaf className="mr-2 h-4 w-4" />
        Check Soil
      </Button>
      <Button variant="moss">
        <Wheat className="mr-2 h-4 w-4" />
        Harvest
      </Button>
      <Button variant="outline">
        <Sprout className="mr-2 h-4 w-4" />
        View Analytics
      </Button>
    </div>
  ),
}