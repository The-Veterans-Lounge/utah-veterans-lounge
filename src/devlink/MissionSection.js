"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./MissionSection.module.css";

export function MissionSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_mission")}
      tag="section"
      animation-container="text-fade-in"
      id="mission"
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
              className={_utils.cx(_styles, "mission_component")}
              tag="div"
            >
              <_Builtin.Heading tag="h2" animation-element="text-fade-in">
                <_Builtin.Span
                  className={_utils.cx(
                    _styles,
                    "text-style-tagline",
                    "margin-right",
                    "margin-xlarge"
                  )}
                >
                  {"Our Mission"}
                </_Builtin.Span>
                {
                  "We connect Utah veterans with the resources, community, and support they've earned through service. Your donation helps us serve those who served."
                }
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-top", "margin-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-group")}
                  tag="div"
                >
                  <Button
                    variant="Full Blue"
                    buttonText="Our impact"
                    buttonLink={{
                      href: "#",
                    }}
                  />
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-link",
                      "is-icon"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Donate"}</_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xxsmall")}
                      value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%203L11%208L6%2013%22%20stroke%3D%22CurrentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
