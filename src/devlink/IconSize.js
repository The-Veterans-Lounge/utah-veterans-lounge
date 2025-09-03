"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconSize.module.css";

export function IconSize({
  as: _Component = _Builtin.DOM,
  iconText = "ph ph-play",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "icon")}
      tag="span"
      class={iconText}
    >
      {""}
    </_Component>
  );
}
