import styled from 'styled-components'
import { BREAKPOINTS } from '@/styles/breakpoints'

export const PageIntroStyles = styled.header`& {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);
  align-items: end;
  gap: var(--space-2xl);
  border-bottom: var(--border-width) solid var(--onix-hero-divider);
  padding-bottom: var(--space-2xl);
}

& [data-part=heading] {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-lg);
}

& [data-part=heading] h1 {
  max-width: 15ch;
  margin: 0;
  color: var(--onix-hero-text-primary);
  font-size: var(--font-size-page-title);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-display);
  hyphens: auto;
  overflow-wrap: anywhere;
}

& > p {
  max-width: 54ch;
  margin: 0 0 var(--space-xs);
  color: var(--color-text-muted);
  font-size: var(--font-size-lead);
  line-height: var(--line-height-body);
}

@media (max-width: ${BREAKPOINTS.md}) {
  & {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    padding-bottom: var(--space-xl);
  }
}

@media (max-width: ${BREAKPOINTS.xs}) {
  & [data-part=heading] h1 {
    font-size: clamp(1.75rem, 8.5vw, 2.5rem);
  }
}
`
