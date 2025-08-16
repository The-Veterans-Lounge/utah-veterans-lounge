"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroSection.module.css";

export function HeroSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_hero")} tag="header">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large", "is--100")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero_content")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-global")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "_2col_grid", "z-index-2")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "hero-title")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_1183b529-3d98-4dd0-65c5-57333052151b-30521514"
                    )}
                    tag="h1"
                  >
                    {"Still"}
                    <br />
                    {"Serving"}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-medium",
                      "text-weight-semibold"
                    )}
                  >
                    {
                      "Honor their service by supporting Utah's veteran community. Your contribution powers weekly dinners, life-changing support, and real connection."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "hero_visuals")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "hero_img")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Vets Lounge Veterans in Utah County"
                src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6897d896fc136e7dc917efbb_502908224_10233185925567870_6352814759147842384_n.jpg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "noise", "is-hero")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "dark_gradient")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
