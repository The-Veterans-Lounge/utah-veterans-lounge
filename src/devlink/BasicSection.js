"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BasicSection.module.css";

export function BasicSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_blank")} tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
