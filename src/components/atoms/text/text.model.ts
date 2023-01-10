export type Texts =
  "displayBold"
  | "displayRegular"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading2Medium"
  | "lead"
  | "bodyRegular"
  | "bodySemibold"
  | "blockquoteRegular"
  | "blockquoteLarge"
  | "blockquoteHeader"
  | "blockquoteMedium"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "button16Pt"
  | "button14Pt"
  | "button12Pt"
  | "buttonLarge"
  | "buttonSmall";

export type Tags = {
  [key: string]: string;
};

export type Props = {
  type: Texts;
  className?: string;
  children: string;
};