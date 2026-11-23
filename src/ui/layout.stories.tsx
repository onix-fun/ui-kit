import type { Meta, StoryObj } from '@storybook/react-vite'
import { Container, Position, Spacer, Stack } from '@/ui/layout'
import { Page } from '@/ui/page'
import { PageIntro } from '@/ui/page-intro'

const meta = {
  title: 'UI/Layout',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const PageShell: Story = {
  render: () => (
    <Page title="Заголовок страницы">
      <p>Стандартная оболочка страницы с сеткой, совпадающей с шапкой.</p>
    </Page>
  ),
}

export const Intro: Story = {
  render: () => (
    <Container paddingInline={24} style={{ paddingBlock: 32 }}>
      <PageIntro
        eyebrow="Раздел"
        title="Введение в раздел"
        description="Короткое описание, которое задаёт контекст страницы."
      />
    </Container>
  ),
}

export const ContainerStack: Story = {
  render: () => (
    <Container maxWidth={640} paddingInline={24} style={{ paddingBlock: 32 }}>
      <Stack direction="row" justify="between" align="center" gap={16}>
        <span>Левый элемент</span>
        <span>Правый элемент</span>
      </Stack>
    </Container>
  ),
}

export const PositionSpacer: Story = {
  render: () => (
    <Container paddingInline={24} style={{ paddingBlock: 32 }}>
      <div style={{ position: 'relative', height: 180, border: '1px dashed var(--color-hairline)' }}>
        <Position top={16} left={16}>
          Верхний левый блок
        </Position>
        <Spacer size={32} />
        <Position bottom={16} right={16}>
          Нижний правый блок
        </Position>
      </div>
    </Container>
  ),
}
