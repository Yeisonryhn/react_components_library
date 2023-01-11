import { Texts } from '../text/text.model';

export type ButtonType = 'primary' | 'clean' | 'secondary' | 'success' | 'stop';

export type Variants = 'text' | 'outlined' | 'contained';

export type ButtonProps = {
  textType: Texts;
  label: string;
  buttonType: ButtonType;
  disabledButton: boolean;
  classButton?: string;
  classText?: string;
  variant?: Variants;
  onChange?: Function;
  href?: string;
};

export type Buttons = {
  [key: string]: ButtonType;
};
