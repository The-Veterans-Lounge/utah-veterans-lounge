"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./TeamSection.module.css";

export function TeamSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_team")}
      tag="section"
      id="team"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "team_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "team_heading-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-bottom",
                        "margin-medium"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-style-tagline")}
                        tag="div"
                      >
                        {"Our team"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h2")}
                      tag="h2"
                    >
                      {"Thanks to"}
                      <_Builtin.Span
                        className={_utils.cx(_styles, "team_heading-span")}
                      >
                        {" "}
                      </_Builtin.Span>
                      {"our sponsors, volunteers"}
                      <_Builtin.Span
                        className={_utils.cx(
                          _styles,
                          "team_heading-span",
                          "_2"
                        )}
                      >
                        {" "}
                      </_Builtin.Span>
                      {"and the Utah Veterans"}
                      <_Builtin.Span
                        className={_utils.cx(
                          _styles,
                          "team_heading-span",
                          "_3"
                        )}
                      >
                        {" "}
                      </_Builtin.Span>
                      {"who build something bigger than themselves."}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-medium")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-group", "is-center")}
                    tag="div"
                  >
                    <Button
                      variant="Full Blue"
                      buttonText="Get Involved"
                      buttonLink={{
                        href: "#",
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
