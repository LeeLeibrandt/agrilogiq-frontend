import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Field Information</DialogTitle>
          <DialogDescription>
            Make changes to your field settings here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Field Name
            </label>
            <input
              id="name"
              defaultValue="North Field"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="crop" className="text-right">
              Crop Type
            </label>
            <input
              id="crop"
              defaultValue="Corn"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="sage">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const PlantingDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="sage">Plan Planting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Plan Your Planting Schedule</DialogTitle>
          <DialogDescription>
            Schedule planting activities for your fields. Consider weather conditions and soil preparation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="field" className="text-right">
              Field
            </label>
            <select id="field" className="col-span-3 px-3 py-2 border rounded-md">
              <option>North Field</option>
              <option>South Field</option>
              <option>East Pasture</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="seed" className="text-right">
              Seed Type
            </label>
            <select id="seed" className="col-span-3 px-3 py-2 border rounded-md">
              <option>Corn Hybrid</option>
              <option>Soybeans</option>
              <option>Winter Wheat</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="date" className="text-right">
              Planting Date
            </label>
            <input
              id="date"
              type="date"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="sage">Schedule Planting</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}