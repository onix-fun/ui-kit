import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb'
import { Button } from '@/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { Stack } from '@/ui/layout'
import { Separator } from '@/ui/separator'

const meta = {
  title: 'UI/Primitives',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Badges: Story = {
  render: () => (
    <Stack direction="row" gap={8} wrap>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </Stack>
  ),
}

export const CardExample: Story = {
  render: () => (
    <Stack direction="row" gap={24} wrap align="start">
      <Card style={{ maxWidth: 360 }}>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Базовая карточка</CardDescription>
          <CardAction>
            <Badge variant="outline">Demo</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>Содержимое карточки использует семантические токены.</CardContent>
        <CardFooter>
          <Button size="sm">Действие</Button>
        </CardFooter>
      </Card>
      <Card variant="outline" style={{ maxWidth: 360 }}>
        <CardHeader>
          <CardTitle>Outline</CardTitle>
          <CardDescription>Вариант с рамкой</CardDescription>
        </CardHeader>
        <CardContent>Подходит для нейтральных блоков и списков.</CardContent>
      </Card>
      <Card variant="muted" style={{ maxWidth: 360 }}>
        <CardHeader>
          <CardTitle>Muted</CardTitle>
          <CardDescription>Вариант с мягким фоном</CardDescription>
        </CardHeader>
        <CardContent>Используется для вторичного контента.</CardContent>
      </Card>
    </Stack>
  ),
}

export const FormFields: Story = {
  render: () => (
    <Stack direction="column" gap={16} style={{ maxWidth: 360 }}>
      <Stack direction="column" gap={8}>
        <Label htmlFor="story-email">Email</Label>
        <Input id="story-email" type="email" placeholder="name@example.com" />
      </Stack>
      <Stack direction="column" gap={8}>
        <Label htmlFor="story-name">Имя</Label>
        <Input id="story-name" placeholder="Иван" />
      </Stack>
    </Stack>
  ),
}

export const Separators: Story = {
  render: () => (
    <Stack direction="column" gap={16} style={{ maxWidth: 360 }}>
      <span>До разделителя</span>
      <Separator />
      <span>После разделителя</span>
    </Stack>
  ),
}

export const Breadcrumbs: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<a href="#home" />}>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Каталог</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
