import { Story, Variant } from '@histoire/plugin-react'
import { Container, Position, Spacer, Stack } from '@/ui/layout'
import { Page } from '@/ui/page'
import { PageIntro } from '@/ui/page-intro'

export default function LayoutStory() {
  return (
    <Story id="layout" title="UI/Layout">
      <Variant id="page" title="Page">
        <Page title="Заголовок страницы">
          <p>Стандартная оболочка страницы с сеткой, совпадающей с шапкой.</p>
        </Page>
      </Variant>
      <Variant id="page-intro" title="PageIntro">
        <PageIntro
          eyebrow="Раздел"
          title="Введение в раздел"
          description="Короткое описание, которое задаёт контекст страницы."
        />
      </Variant>
      <Variant id="container-stack" title="Container + Stack">
        <Container maxWidth={640} paddingInline={24}>
          <Stack direction="row" justify="between" align="center" gap="md">
            <span>Левый элемент</span>
            <span>Правый элемент</span>
          </Stack>
        </Container>
      </Variant>
      <Variant id="spacer-position" title="Spacer + Position">
        <Position position="relative" style={{ height: 120, width: '100%' }}>
          <span>Фиксированный блок</span>
          <Spacer size={32} />
          <Position position="absolute" right={0} bottom={0}>
            <span>Абсолютный блок</span>
          </Position>
        </Position>
      </Variant>
    </Story>
  )
}
