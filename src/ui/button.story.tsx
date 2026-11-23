import { Story, Variant } from '@histoire/plugin-react'
import { Button } from '@/ui/button'
import { Stack } from '@/ui/layout'

export default function ButtonStory() {
  return (
    <Story id="button" title="UI/Button">
      <Variant id="variants" title="Variants">
        <Stack direction="row" gap="sm" wrap>
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Stack>
      </Variant>
      <Variant id="sizes" title="Sizes">
        <Stack direction="row" gap="sm" align="center" wrap>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Icon button">
            ★
          </Button>
        </Stack>
      </Variant>
      <Variant id="states" title="States">
        <Stack direction="row" gap="sm" wrap>
          <Button disabled>Disabled</Button>
          <Button aria-invalid>Invalid</Button>
        </Stack>
      </Variant>
    </Story>
  )
}
