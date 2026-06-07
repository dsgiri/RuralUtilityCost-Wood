export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  path: string;
  iconName: string;
}

export type ThemeVariant = 'default' | 'inspector';

export interface RouteConfig {
  path: string;
  label: string;
  isExternal?: boolean;
}
