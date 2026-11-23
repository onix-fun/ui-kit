# @onix/ui-kit

Отдельный UI-слой ONIX: дизайн-токены, shadcn/Base UI примитивы, layout- и brand-компоненты, а также Storybook.

Репозиторий: https://github.com/onix-fun/ui-kit.git

## Структура

```text
src/
  styles/     токены и Tailwind-маппинг (canonical source)
  lib/        утилиты и общие типы
  hooks/      useColorTheme, useDocumentMeta
  ui/         примитивы, layout, brand-компоненты и *.stories.tsx
.storybook/   конфигурация Storybook
eslint.config.js  переиспользуемые правила UI-слоя
components.json   источник истины для shadcn CLI
```

## Команды

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run storybook         # Storybook локально
npm run build-storybook   # статическая сборка Storybook
npm run build             # dist/index.js + dist/styles.css + dist/index.d.ts
```

Storybook 10 требует Node 20+. Для GitHub Pages используется `STORYBOOK_BASE_PATH=/ui-kit/`.

`npm run build` выполняет сборки в порядке JS → CSS → типы. Отдельный CSS-entry
нужен, чтобы Geist остался внешними `.woff2`-файлами: library-режим Vite
инлайнит ассеты и раздувал бы `styles.css` до ~142 kB base64.

## Потребители

Frontend подключает пакет как `file:../ui-kit`:

```ts
import { Button, Card, useDocumentMeta } from '@onix/ui-kit'
import '@onix/ui-kit/styles.css'
```

Правило против literal-цветов экспортируется для frontend:

```js
import { uiKitColorPlugin } from '@onix/ui-kit/eslint'
```

Токены и маппинг меняются только здесь; в frontend не должно быть своих копий `tokens.css` или `components.json`.
