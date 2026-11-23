import { Story, Variant } from '@histoire/plugin-react'
import { Badge } from '@/ui/badge'
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
import { Separator } from '@/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb'
import { Button } from '@/ui/button'
import { Stack } from '@/ui/layout'

export default function PrimitivesStory() {
  return (
    <Story id="primitives" title="UI/Primitives">
      <Variant id="badges" title="Badge">
        <Stack direction="row" gap="sm" wrap>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </Stack>
      </Variant>
      <Variant id="card" title="Card">
        <Card style={{ maxWidth: 420 }}>
          <CardHeader>
            <CardTitle>Карточка</CardTitle>
            <CardDescription>Пример композиции примитивов</CardDescription>
            <CardAction>
              <Badge variant="outline">Demo</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>Содержимое карточки использует семантические токены.</CardContent>
          <CardFooter>
            <Button size="sm">Действие</Button>
          </CardFooter>
        </Card>
      </Variant>
      <Variant id="form" title="Input + Label">
        <Stack direction="column" gap="sm" style={{ maxWidth: 360 }}>
          <Label htmlFor="story-email">Email</Label>
          <Input id="story-email" type="email" placeholder="name@example.com" />
          <Label htmlFor="story-name">Имя</Label>
          <Input id="story-name" placeholder="Иван" />
        </Stack>
      </Variant>
      <Variant id="separator" title="Separator">
        <Stack direction="column" gap="md" style={{ maxWidth: 360 }}>
          <span>До разделителя</span>
          <Separator />
          <span>После разделителя</span>
        </Stack>
      </Variant>
      <Variant id="breadcrumb" title="Breadcrumb">
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
      </Variant>
    </Story>
  )
}
