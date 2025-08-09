import * as React from "react";
import * as Types from "./types";

declare function IconColor(props: {
  as?: React.ElementType;
  iconText?: Types.Builtin.Text;
  colorVariant?:
    | "Inherit Color"
    | "Primary Color"
    | "Secondary Color"
    | "Tertiary Color";
}): React.JSX.Element;
