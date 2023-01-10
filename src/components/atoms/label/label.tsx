import React from "react";
import "./label.css";

export interface LabelProps {
    label: string;
}

const Label = (props: LabelProps) => {
    return <label>{props.label}</label>;
};

export default Label;