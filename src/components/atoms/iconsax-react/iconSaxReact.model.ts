import { IconProps } from 'iconsax-react/dist/index';
import { FC, Ref } from 'react';

export type Icon = FC<IconProps>;

export type IconsPF =
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Ticket'
  | 'BagHappy'
  | 'Profile'
  | 'Microphone2'
  | 'Music'
  | 'LikeShapes'
  | 'Smileys'
  | 'SearchNormal1'
  | 'ArrowLeft2'
  | 'Calendar'
  | 'Location'
  | 'Global'
  | 'Wallet'
  | 'CardPos'
  | 'Edit'
  | 'Lock1'
  | 'Copy'
  | 'ArrowRight2';

export type Variant =
  | 'Linear'
  | 'Outline'
  | 'Broken'
  | 'Bold'
  | 'Bulk'
  | 'TwoTone';

export type IconStyle = {
  iconName: IconsPF;
  className?: string;
  variant?: Variant;
  ref?: Ref<SVGSVGElement>;
  color?: string;
  size?: string | number;
};

export type Icons = {
  [key: string]: Icon;
};

export type Variants = {
  [key: string]: Variant;
};
