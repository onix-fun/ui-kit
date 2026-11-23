import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'

const rows = [
  { name: 'Button', status: 'Готов', owner: 'UI' },
  { name: 'Dialog', status: 'Новый', owner: 'UI' },
  { name: 'Table', status: 'Новый', owner: 'UI' },
]

const meta = {
  title: 'UI/Table',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Компоненты UI kit</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Компонент</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Владелец</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>
              <Badge variant={row.status === 'Готов' ? 'secondary' : 'outline'}>{row.status}</Badge>
            </TableCell>
            <TableCell>{row.owner}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
