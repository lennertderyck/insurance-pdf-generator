import remixGlyph from 'remixicon/fonts/remixicon.glyph.json';

export enum IconSize {
  'small' = '1rem',
  'base' = '1.3rem',
  'medium' = '1.6rem',
  'large' = '2rem',
  'xlarge' = '2.4rem',
}

export interface SvgProps {
  size?: keyof typeof IconSize;
}

export type AvailableIcons = keyof typeof remixGlyph;

export interface IconProps extends SvgProps {
  color?: string;
  className?: string;
  name: AvailableIcons;
}