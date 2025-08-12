/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '@/styles/theme/theme.ts';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div
    css={css`
      max-width: ${theme.viewSize.mobile};
      margin: ${theme.spacing.spacing0} auto;
      background-color: ${theme.colors.backgroundDefault};
      min-height: ${theme.viewport.vh100};
      padding: ${theme.spacing.spacing5};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `}
  >
    {children}
  </div>
);

export default Layout;
