import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const colorLiteralPattern = /#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})\b|\b(?:rgba?|hsla?)\s*\(/i

/**
 * Переиспользуемое правило UI-слоя. Frontend импортирует его через
 * `@onix/ui-kit/eslint`, чтобы не дублировать проверку токенов.
 */
export const uiKitColorPlugin = {
  rules: {
    'no-hardcoded-colors': {
      meta: {
        type: 'problem',
        docs: { description: 'Use semantic design tokens instead of literal colors in UI primitives.' },
        schema: [],
        messages: { token: 'Use a semantic design token instead of a literal color.' },
      },
      create(context) {
        const reportIfColorLiteral = (node, value) => {
          if (typeof value === 'string' && colorLiteralPattern.test(value)) {
            context.report({ node, messageId: 'token' })
          }
        }

        return {
          Literal(node) {
            reportIfColorLiteral(node, node.value)
          },
          TemplateLiteral(node) {
            for (const quasi of node.quasis) reportIfColorLiteral(quasi, quasi.value.raw)
          },
        }
      },
    },
  },
}

export default defineConfig([
  globalIgnores(['dist', '.histoire', 'storybook-static']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-restricted-imports': ['error', { patterns: ['*.scss', '**/*.scss'] }],
    },
  },
  {
    files: ['src/ui/**/*.{ts,tsx}'],
    plugins: { 'onix-ui': uiKitColorPlugin },
    rules: { 'onix-ui/no-hardcoded-colors': 'error' },
  },
])
