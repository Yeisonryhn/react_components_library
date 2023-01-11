import React from 'react';
import { IconStyle, Icons, Icon, Variants } from './iconSaxReact.model';
import * as IconsProps from 'iconsax-react';

export const icons: Icons = {
  ArrowLeft: IconsProps['ArrowLeft'],
  ArrowRight: IconsProps['ArrowRight'],
  Ticket: IconsProps['Ticket'],
  BagHappy: IconsProps['BagHappy'],
  Profile: IconsProps['Profile'],
  Microphone2: IconsProps['Microphone2'],
  Music: IconsProps['Music'],
  LikeShapes: IconsProps['LikeShapes'],
  Smileys: IconsProps['Smileys'],
  SearchNormal1: IconsProps['SearchNormal1'],
  ArrowLeft2: IconsProps['ArrowLeft2'],
  Calendar: IconsProps['Calendar'],
  Location: IconsProps['Location'],
  Global: IconsProps['Global'],
  Wallet: IconsProps['Wallet'],
  CardPos: IconsProps['CardPos'],
  Edit: IconsProps['Edit'],
  Lock1: IconsProps['Lock1'],
  Copy: IconsProps['Copy'],
  ArrowRight2: IconsProps['ArrowRight2'],
};

export const variants: Variants = {
  Linear: 'Linear',
  Outline: 'Outline',
  Broken: 'Broken',
  Bold: 'Bold',
  Bulk: 'Bulk',
  TwoTone: 'TwoTone',
};

const IconReact = (props: IconStyle) => {
  const IconPF: Icon = icons[props.iconName];
  return (
    <IconPF
      size={props.size}
      variant={props.variant}
      color={props.color}
      className={props.className}
    />
  );
};

export default IconReact;
