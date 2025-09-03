"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconSize } from "./IconSize";
import * as _utils from "./utils";
import _styles from "./IconColor.module.css";

export function IconColor({
  as: _Component = _Builtin.Block,
  iconText = "ph ph-play",
  colorVariant = "Inherit Color",
}) {
  const _styleVariantMap = {
    "Inherit Color": "",
    "Primary Color": "w-variant-7811dcc8-ec1c-73a7-ff3f-4b4726645da0",
    "Secondary Color": "w-variant-d622219e-edc6-82bc-8805-1bb4cea14b68",
    "Tertiary Color": "w-variant-cdd1c203-457b-bf41-1ba6-b8075782983e",
  };

  const _activeStyleVariant = _styleVariantMap[colorVariant];

  return (
    <_Component
      className={_utils.cx(_styles, "icon-color", _activeStyleVariant)}
      tag="div"
    >
      <IconSize iconText={iconText} />
    </_Component>
  );
}
