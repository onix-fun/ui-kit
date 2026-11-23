import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'UI/Tabs',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" style={{ maxWidth: 560 }}>
      <TabsList>
        <TabsTrigger value="overview">Обзор</TabsTrigger>
        <TabsTrigger value="tokens">Токены</TabsTrigger>
        <TabsTrigger value="components">Компоненты</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Обзор</CardTitle>
            <CardDescription>Базовая информация о UI kit.</CardDescription>
          </CardHeader>
          <CardContent>Storybook заменяет Histoire и даёт единый каталог компонентов.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tokens">
        <Card>
          <CardHeader>
            <CardTitle>Токены</CardTitle>
            <CardDescription>Отступы используют шкалу 4/8/16/24/32.</CardDescription>
          </CardHeader>
          <CardContent>Цвета и типографика берутся из `tokens.css`.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="components">
        <Card>
          <CardHeader>
            <CardTitle>Компоненты</CardTitle>
            <CardDescription>Новые primitives добавлены в каталог.</CardDescription>
          </CardHeader>
          <CardContent>Dialog, Select, Tabs, Tooltip, Toast, Table, Skeleton и другие.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}
