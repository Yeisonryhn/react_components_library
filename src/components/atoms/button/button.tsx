import React from 'react';
import ButtonStyles from './button.module.css';
import Button from '@mui/material/Button';
import Text from '../text/text';
import { styled } from '@mui/system';
import { ButtonProps, ButtonType, Variants, Buttons } from './button.model';
import { Texts } from '../text/text.model';
import Link from 'next/link';

export const buttonType: Buttons = {
  primary: 'primary',
  clean: 'clean',
  secondary: 'secondary',
  success: 'success',
  stop: 'stop',
};

const ButtonPF = (props: ButtonProps): JSX.Element => {

  const label: string = props.label;
  const textType: Texts = props.textType;
  const classButton: string | undefined = props.classButton;
  const classText: string | undefined = props.classText;
  const disabledButton: boolean = props.disabledButton;
  const buttonType: ButtonType = props.buttonType;
  const variant: Variants | undefined = props.variant;
  const onChange: Function | undefined = props.onChange;
  const href: string | undefined = props.href;

  const classes: string = [
    ButtonStyles.buttonBase,
    classButton,
    ButtonStyles[buttonType],
    disabledButton && ButtonStyles.disabledButton,
  ].join(' ');

  const ButtonStyle = styled(Button)(() =>
    buttonType === 'primary'
      ? {
          border: 'none',
          textTransform: 'none',
          backgroundColor: 'var(--purple-main)',
          '&:hover': {
            backgroundColor: 'var(--purple-main)',
          },
        }
      : buttonType === 'clean'
      ? {
          border: 'none',
          textTransform: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }
      : buttonType === 'secondary'
      ? {
          textTransform: 'none',
          backgroundColor: 'transparent',
          border: '1px solid var(--purple-main)',
          '&:hover': {
            backgroundColor: 'transparent',
            border: '1px solid var(--purple-main)',
          },
        }
      : buttonType === 'stop'
      ? {
          textTransform: 'none',
          backgroundColor: 'var(--red-button-stop-sale)',
          '&:hover': {
            backgroundColor: 'var(--red-button-stop-sale)',
          },
        }
      : {
          textTransform: 'none',
          backgroundColor: 'var(--green-button-sale)',
          '&:hover': {
            backgroundColor: 'var(--green-button-sale)',
          },
        }
  );

  const button: JSX.Element = (
    <ButtonStyle
      onChange={onChange && ((event: any) => onChange(event))}
      disabled={disabledButton}
      className={classes}
      variant={variant}
    >
      <Text
        className={`
    ${ButtonStyles.textBase} 
    ${classText} 
  `}
        type={textType}
      >
        {label}
      </Text>
    </ButtonStyle>
  );

  return <>{href ? <Link href={href}>{button}</Link> : button}</>;
};

export default ButtonPF;
