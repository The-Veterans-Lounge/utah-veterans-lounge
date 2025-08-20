"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StatsSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".stats_image","originalId":"5a066d4e-43ab-e815-dbad-83be3c9e7e1f","appliesTo":"CLASS"},"targets":[{"selector":".stats_image","originalId":"5a066d4e-43ab-e815-dbad-83be3c9e7e1f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1745350713324}},"actionLists":{"a-19":{"id":"a-19","title":"Image fade in [ scroll in view ]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuad","duration":2000,"target":{"useEventTarget":true,"id":"5a066d4e-43ab-e815-dbad-83be3c9e7e1f"},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":2000,"target":{"useEventTarget":true,"id":"5a066d4e-43ab-e815-dbad-83be3c9e7e1f"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745350735318}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StatsSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_stats")}
      tag="section"
      id="stats"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "stats_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-xxlarge"
                )}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "stats_content")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "stats_content-left")}
                    tag="div"
                  >
                    <_Builtin.Heading tag="h2">
                      {
                        "Where every dollar builds community: From weekly dinners to life-changing support"
                      }
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "stats_content-right")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-medium")}
                    >
                      {
                        "Your generosity has transformed veteran lives across Utah County. This year alone, we've connected 200+ veterans to critical services, hosted weekly gatherings for peer support, and helped secure everything from new roofs to mental health resources. From Eagle Mountain to Ogden, your donations ensure no veteran request goes unanswered—whether they need benefits navigation or simply a place to belong."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.Block>
              <_Builtin.Grid
                className={_utils.cx(_styles, "stats_list")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "stats_item",
                    "background-color-purple"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5a066d4e-43ab-e815-dbad-83be3c9e7e11-3c9e7e03"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-large",
                      "z-index-1"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h5")}
                      tag="h3"
                    >
                      {"Projects supported through local programs"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "stats_item-content",
                      "z-index-1"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "stats_number")}
                      tag="div"
                    >
                      {"256"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-vertical",
                        "margin-xsmall"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "divider-horizontal")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Paragraph>
                      {
                        "Over 25,000 people directly supported through community programs, crisis response, and ongoing care initiatives."
                      }
                      <br />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "stats_texture",
                      "is-darken-20"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c85a_pinkish.avif"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "stats_image-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "stats_image")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c8a4_849cf20febcfb36b65eeebd3be2dced9_voollunteer.jpg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "stats_item",
                    "background-color-lightblue"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-large"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h5")}
                      tag="h3"
                    >
                      {"Resource Distribution"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "stats_item-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "stats_number")}
                      tag="div"
                    >
                      {"85%"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-vertical",
                        "margin-xsmall"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "divider-horizontal")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Paragraph>
                      {
                        "of every dollar goes directly to on-the-ground efforts, tools, and services making a difference where it’s needed most."
                      }
                      <br />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "stats_texture",
                      "is-darken-40"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c857_purple_blue.avif"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "stats_item",
                    "background-color-vermillion"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5a066d4e-43ab-e815-dbad-83be3c9e7e2d-3c9e7e03"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-large"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-style-h5")}
                      tag="h3"
                    >
                      {"Volunteer & Project Support"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "stats_item-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "stats_number")}
                      tag="div"
                    >
                      {"120+"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-vertical",
                        "margin-xsmall"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "divider-horizontal")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Paragraph>
                      {
                        "120+ local volunteers mobilized across 60+ grassroots projects in the past year."
                      }
                      <br />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "stats_texture",
                      "is-overlay-40"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c85a_pinkish.avif"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "stats_image-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "stats_image")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6897d8974f56907d00e0d21b_502896076_10233185985489368_4922596376160636272_n.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
