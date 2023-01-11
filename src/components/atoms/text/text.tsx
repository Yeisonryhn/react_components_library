import React from 'react';
import TextStyles from './text.module.css';
import { Texts, Tags, Props } from './text.model';
//import styled from 'styled-components'

export const tags: Tags = {
  displayBold: 'span',
  displayRegular: 'span',
  heading1: 'h1',
  heading2: 'h2',
  heading2Medium: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  lead: 'span',
  bodySemibold: 'span',
  bodyRegular: 'p',
  blockquoteRegular: 'p',
  blockquoteLarge: 'p',
  blockquoteHeader: 'p',
  blockquoteMedium: 'p',
  labelLarge: 'label',
  labelMedium: 'label',
  labelSmall: 'label',
  button16Pt: 'span',
  button14Pt: 'span',
  button12Pt: 'span',
  buttonLarge: 'span',
  buttonSmall: 'span',
};

const Text = (props: Props) => {
  const type: Texts = props.type;

  const classes: string = [
    TextStyles[type],
    TextStyles.letterSpacing,
    props.className,
  ].join(' ');

  const TagName: string | React.JSXElementConstructor<any> =
    React.createElement(`${tags[type]}`, [props], props.children).type;

  return (
    <TagName {...props} className={classes}>
      {props.children}
    </TagName>
  );
};

export default Text;
