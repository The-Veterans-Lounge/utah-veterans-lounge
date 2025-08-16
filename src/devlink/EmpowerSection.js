"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./EmpowerSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".empower_link-block","originalId":"cced14fb-2d13-6d58-c427-0bd9be0d09b9","appliesTo":"CLASS"},"targets":[{"selector":".empower_link-block","originalId":"cced14fb-2d13-6d58-c427-0bd9be0d09b9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745265982352},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".empower_link-block","originalId":"cced14fb-2d13-6d58-c427-0bd9be0d09b9","appliesTo":"CLASS"},"targets":[{"selector":".empower_link-block","originalId":"cced14fb-2d13-6d58-c427-0bd9be0d09b9","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745265982352},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-20","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"cced14fb-2d13-6d58-c427-0bd9be0d09a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cced14fb-2d13-6d58-c427-0bd9be0d09a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-20-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":90,"restingState":50},{"continuousParameterGroupId":"a-20-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":90,"restingState":50}],"createdOn":1745374114702}},"actionLists":{"a-17":{"id":"a-17","title":"Tab change [ in view ]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_tab_timer.red","selectorGuids":["da8b004e-e494-ca5d-e5f8-c5bec79378a9","d5b9c2ee-e424-6059-dcf4-98c04d5c8665"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-17-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_link-block","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef1"]},"globalSwatchId":"--alpha-colors--transparent-blue50","rValue":21,"bValue":67,"gValue":58,"aValue":0.5}}]},{"actionItems":[{"id":"a-17-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuad","duration":4000,"target":{"useEventTarget":"CHILDREN","selector":".empower_tab_timer.red","selectorGuids":["da8b004e-e494-ca5d-e5f8-c5bec79378a9","d5b9c2ee-e424-6059-dcf4-98c04d5c8665"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-17-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".empower_link-block","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef1"]},"globalSwatchId":"--base-color-brand--dark-blue","rValue":21,"bValue":67,"gValue":58,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745264736302},"a-18":{"id":"a-18","title":"Tab change [ out of view ]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".empower_tab_timer.red","selectorGuids":["da8b004e-e494-ca5d-e5f8-c5bec79378a9","d5b9c2ee-e424-6059-dcf4-98c04d5c8665"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-18-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".empower_link-block","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef1"]},"globalSwatchId":"--alpha-colors--transparent-blue50","rValue":21,"bValue":67,"gValue":58,"aValue":0.5}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745264736302},"a-20":{"id":"a-20","title":"cards magnet [ on hover ]","continuousParameterGroups":[{"id":"a-20-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"xValue":-20,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-20-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"zValue":-2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"xValue":5,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-20-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"zValue":2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]},{"id":"a-20-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"yValue":-10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-20-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".empower_card","selectorGuids":["a8e69b10-a5ed-d5c7-2185-6420c1aa9ef4"]},"yValue":5,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1745373994694}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function EmpowerSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_empower")}
      tag="section"
      id="empower"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "empower_component", "")}
            data-w-id="cced14fb-2d13-6d58-c427-0bd9be0d09a2"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-section-large",
                "padding-tablet-small"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "grain")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "noise")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-style-tagline")}
                  tag="div"
                >
                  {"Empower"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "empower_tab-component")}
                current="Tab 1"
                easing="ease-in-out-quad"
                fadeIn={450}
                fadeOut={0}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "empower_tab-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "empower_link-block")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_link-text-small")}
                      tag="div"
                    >
                      {"01"}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-style-nowrap")}
                      tag="h3"
                    >
                      {"Weekly gatherings & peer support"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer", "red")}
                      tag="div"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "empower_link-block")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_link-text-small")}
                      tag="div"
                    >
                      {"02"}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "", "text-style-nowrap")}
                      tag="h3"
                    >
                      {"Resource navigation & benefits help"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer", "red")}
                      tag="div"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "empower_link-block")}
                    data-w-tab="Tab 3"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_link-text-small")}
                      tag="div"
                    >
                      {"03"}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-style-nowrap")}
                      tag="h3"
                    >
                      {"Community events & ruck marches"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer", "red")}
                      tag="div"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "empower_link-block")}
                    data-w-tab="Tab 4"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_link-text-small")}
                      tag="div"
                    >
                      {"04"}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-style-nowrap")}
                      tag="h3"
                    >
                      {"Crisis support & emergency aid"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab_timer", "red")}
                      tag="div"
                    />
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "empower_tab-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "empower_tab-panel")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab-container")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "empower_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "empower_card-content")}
                          tag="div"
                        >
                          <_Builtin.DOM
                            className={_utils.cx(_styles, "empower_card-img")}
                            tag="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                            width="100%"
                          >
                            <_Builtin.DOM
                              tag="path"
                              class="st0"
                              d="M222.3,5.7c9.3,2.2,18.8,3.2,28,5.7,41.9,11.1,76.3,41,90.8,76.9,1.6,4,4.1,16.1,6.2,18.3s11.3,5,14.7,6.9c92.4,52.2,45,178.4-64.6,173.1-6.6-.3-21.8-4.4-25.9-4s-19.8,10.3-25.6,12.3-14.4,4.6-21.5,4.5c0-18.7-.2-37.5.2-56.2l71.1-54.1c15.4-14.1-3.4-34.8-23.2-22.3s-29.3,24.6-44.2,34.6c-1.2.8-2.6,1.5-3.9,2v-58.8c0-.4-4.2-6.7-5.1-7.4-6.3-5.1-16.7-5.3-23.2-.4-1.6,1.2-5.7,6.4-5.7,7.9v58.8c-1.4-.4-2.8-1.2-3.9-2-14.7-9.9-29.2-25.3-44.2-34.6-20.2-12.5-38.5,8.3-23.2,22.3l71.3,54.3v55.9c-8.1.1-16.4-2.7-23.7-5.5s-20.7-11.1-23.3-11.3c-4-.4-19.3,3.7-25.9,4-110,5.3-157.3-120.9-63.2-173.9,3.2-1.8,11.4-4.1,13.4-6.1s4.4-13.6,5.9-17.5c14.7-36.8,48.5-65.9,91.1-77.6l26.9-5.7h30.6Z"
                            />
                            <_Builtin.DOM
                              tag="path"
                              class="st0"
                              d="M496.2,512h-236.5c-54.9.3-77.7.3-89,.3-58,0-85.8-42.5-138.4-107.7-22-30.2-24.7-63.1,9.7-78.3,35.7-15.8,60.3,7.7,90.8,19.7-3.8,10.6-8.9,19.8-10,31.2-3.8,40.5,32.3,77.1,78.5,80.4,36.1,2.6,76.3-1.7,112.9-.2,17.2-4.4,17.9-23.9.9-29-36-3-75.9,2.4-111.5-.5-54.3-4.4-64.7-70.4-13-86v-41.5c11.3,1.4,22.7,1.4,34,0,0,12.8,0,25.7,0,38.6h47c1.7,0,22.5-15.3,27.1-17.8,65.5-36.1,162.8-27.3,210.3,27.9,1.8,49.7.2,99.8.8,149.7-1.4,7.4-6,10.7-13.6,13.3Z"
                            />
                          </_Builtin.DOM>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "empower_card-text-wrap"
                            )}
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
                                className={_utils.cx(
                                  _styles,
                                  "heading-style-h5"
                                )}
                                tag="div"
                              >
                                {"What we do"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "text-size-regular",
                                "text-weight-semibold"
                              )}
                            >
                              <_Builtin.NotSupported _atom="InlineCode" />
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "empower_card-background"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "empower_card-texture",
                              "_1"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c857_purple_blue.avif"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "empower_tab-panel")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab-container")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "empower_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "empower_card-content")}
                          tag="div"
                        >
                          <_Builtin.DOM
                            className={_utils.cx(_styles, "empower_card-img")}
                            tag="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <_Builtin.DOM
                              tag="path"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M34.2943 2.316C31.1743 0.831428 27.684 0 24 0C23.172 0 22.3543 0.0411429 21.5469 0.123429C23.3674 4.05771 26.0589 11.9109 23.4411 20.0109C21.1286 27.1663 23.6486 29.856 24.528 32.0623C25.188 33.7149 25.3114 35.208 24.0926 37.092C23.3177 38.2886 22.032 39.168 20.328 39.6377C18.3274 40.1897 15.6669 40.1743 12.828 39.612C9.53486 38.9606 5.99143 37.5823 3.02571 35.6657C7.128 43.0217 14.988 48 24 48H24.0411C24.096 47.3383 24.1989 46.5806 24.3891 45.8126C24.8074 44.1171 25.6509 42.4234 27.084 41.3503C29.1017 39.84 32.6743 39.2794 38.6023 43.0423C40.128 41.8697 41.5114 40.5171 42.7166 39.0171C36.8331 39.5263 31.6389 35.0914 33.7251 28.9646C34.7794 25.8703 34.4246 24.5726 33.5606 22.7366C32.8131 21.1509 31.8 19.2514 30.8794 16.1469C29.8509 12.672 30.4834 9.38914 31.6526 6.70457C32.4274 4.92514 33.4337 3.42 34.2943 2.316ZM34.7966 45.4354C33.6086 44.8029 32.5869 44.4206 31.7023 44.2526C30.7217 44.0657 29.9966 44.1669 29.4806 44.5526C28.7863 45.072 28.476 45.9497 28.272 46.7709C28.1983 47.0691 28.1434 47.3657 28.1006 47.6503C30.4697 47.2423 32.7206 46.4863 34.7966 45.4354ZM17.4943 0.893143C7.40571 3.732 0 13.008 0 24C0 24.876 0.0462859 25.7434 0.138857 26.5971C0.704572 28.3303 1.99886 29.8611 3.62743 31.176C6.40629 33.4183 10.1709 35.0074 13.6063 35.688C15.4234 36.0497 17.1446 36.1577 18.5589 35.9331C19.5223 35.7789 20.3366 35.5337 20.7343 34.92C21.0669 34.4057 20.9931 33.996 20.8131 33.5451C20.5423 32.8663 20.1309 32.1463 19.7434 31.2823C18.612 28.7623 17.5611 25.2 19.6354 18.7817C22.1074 11.1274 18.972 3.74057 17.4943 0.893143ZM37.7811 4.35429C37.0406 5.24743 36.0514 6.62057 35.3211 8.30057C34.4897 10.2103 33.984 12.54 34.716 15.0103C35.5577 17.8491 36.4954 19.5823 37.1794 21.0326C38.46 23.7531 39.072 25.6714 37.512 30.2554C36.8194 32.2869 37.788 33.8589 39.3943 34.5651C41.2457 35.3794 43.7794 35.1943 45.9549 33.7029C47.2697 30.7337 48 27.4526 48 24C48 15.8794 43.9594 8.69657 37.7811 4.35429Z"
                              fill="currentColor"
                            />
                          </_Builtin.DOM>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "empower_card-text-wrap"
                            )}
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
                                className={_utils.cx(
                                  _styles,
                                  "heading-style-h5"
                                )}
                                tag="div"
                              >
                                {"Who do we involve"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "text-size-regular",
                                "text-weight-semibold"
                              )}
                            >
                              {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "empower_card-background",
                            "is-pearl"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "empower_card-texture",
                              "_2"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c85b_blue_purple.avif"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "empower_tab-panel")}
                    tag="div"
                    data-w-tab="Tab 3"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab-container")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "empower_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "empower_card-content")}
                          tag="div"
                        >
                          <_Builtin.DOM
                            className={_utils.cx(_styles, "empower_card-img")}
                            tag="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <_Builtin.DOM
                              tag="g"
                              clip-path="url(#clip0_8295_12766)"
                            >
                              <_Builtin.DOM
                                tag="path"
                                d="M0.500175 26.9627C0.100175 26.5627 -0.0498246 25.8127 0.250175 25.3127C1.71268 23.5002 2.87518 20.8502 4.36268 19.1252C5.85018 17.4002 5.25018 18.4627 6.00018 18.6002L21.5252 23.3002C22.4377 23.6377 22.7252 24.6002 22.2627 25.4377C20.8627 27.2252 19.7502 29.6127 18.3377 31.3502C16.9252 33.0877 17.3502 32.1627 16.3877 31.9252C11.2752 30.7127 6.07518 28.5627 0.950175 27.2377C0.812675 27.1502 0.625175 27.0752 0.512675 26.9752L0.500175 26.9627Z"
                                fill="currentColor"
                              />
                              <_Builtin.DOM
                                tag="path"
                                d="M47.9999 25.6003V26.3503C47.7124 26.7628 47.5624 27.1503 47.0249 27.2878C41.9374 28.6003 36.7999 30.7253 31.7249 31.9253C30.8124 32.1378 30.4374 32.1503 29.8124 31.4003C28.3749 29.6878 27.2624 27.2128 25.8499 25.4378C25.3874 24.6003 25.6874 23.6378 26.5874 23.3003L42.1124 18.6003C42.7499 18.4503 43.3624 18.5878 43.7499 19.1253L48.0124 25.5878L47.9999 25.6003Z"
                                fill="currentColor"
                              />
                              <_Builtin.DOM
                                tag="path"
                                d="M42.3877 31.6875V41.3C42.3877 41.775 41.5502 42.3875 41.1002 42.45L25.4502 47.625V30C26.7377 31.4625 27.4127 33.7 29.3127 34.5125C30.0002 34.8 30.7377 34.925 31.4752 34.875L42.3752 31.6875H42.3877Z"
                                fill="currentColor"
                              />
                              <_Builtin.DOM
                                tag="path"
                                d="M22.6377 47.625L6.4502 42.2375C6.1877 42.1875 5.7002 41.4875 5.7002 41.3V31.6875C5.8252 31.675 5.9502 31.7 6.0752 31.725C9.3252 32.45 12.7377 34.05 15.9877 34.725C17.0127 34.9375 17.7877 34.925 18.7627 34.5125C20.6627 33.7 21.3377 31.4625 22.6252 30V47.625H22.6377Z"
                                fill="currentColor"
                              />
                              <_Builtin.DOM
                                tag="path"
                                d="M19.9127 0.399969C21.4627 0.224969 22.9502 0.724969 24.0127 1.86247C25.4377 0.549969 27.1252 0.0249694 29.0252 0.587469C32.4252 1.59997 33.3627 5.47497 31.4752 8.33747C30.4752 9.84997 26.5627 13.1125 24.9752 14.1C24.2377 14.55 23.8502 14.575 23.1127 14.1C21.4752 13.0625 17.6002 9.84997 16.5752 8.27497C14.5252 5.12497 16.0627 0.824969 19.9002 0.399969H19.9127Z"
                                fill="currentColor"
                              />
                              <_Builtin.DOM
                                tag="path"
                                d="M40.1377 16.2252L39.0877 16.6252C34.7752 18.2002 29.7127 19.0377 25.4877 20.7252C24.9377 20.9502 24.4877 21.2252 24.0752 21.6627L22.9252 20.8627L7.9502 16.2752L17.3627 13.1377L21.6627 16.5127C25.4252 18.9127 27.9002 14.9752 30.7502 13.1627L40.1377 16.2377V16.2252Z"
                                fill="currentColor"
                              />
                            </_Builtin.DOM>
                          </_Builtin.DOM>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "empower_card-text-wrap"
                            )}
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
                                className={_utils.cx(
                                  _styles,
                                  "heading-style-h5"
                                )}
                                tag="div"
                              >
                                {"How do we do it"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "text-size-regular",
                                "text-weight-semibold"
                              )}
                            >
                              {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "empower_card-background",
                            "is-pearl"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "empower_card-texture",
                              "_3"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c85a_pinkish.avif"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "empower_tab-panel")}
                    tag="div"
                    data-w-tab="Tab 4"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "empower_tab-container")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "empower_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "empower_card-content")}
                          tag="div"
                        >
                          <_Builtin.DOM
                            className={_utils.cx(_styles, "empower_card-img")}
                            tag="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 49 49"
                            fill="none"
                          >
                            <_Builtin.DOM
                              tag="path"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.6811 48.4979C18.9052 48.4979 16.0558 48.498 14.4642 48.4292C13.4028 48.4238 12.4472 47.7856 12.0294 46.8071C11.5396 45.9093 10.4433 45.0192 9.2423 44.1738C7.16748 42.7153 4.74248 41.4542 3.76289 40.7779C3.06692 40.2968 2.44076 39.3816 1.96187 38.1958C1.02155 35.8668 0.554664 32.4274 0.502303 30.2282C0.461941 28.5112 1.02046 27.6287 1.63025 27.1705C2.59675 26.4429 3.99634 26.696 4.81666 27.0505C5.08284 27.1661 5.33482 27.3701 5.53118 27.7017C5.7199 28.0192 5.87371 28.5515 5.97844 29.2333C6.10498 30.0591 6.19443 31.1674 6.42023 32.2746C6.61441 33.228 6.89912 34.1891 7.46637 34.896C8.16998 35.7709 9.63718 36.7123 11.124 37.5533C11.3651 37.6897 11.6073 37.8228 11.8462 37.9504C11.1622 36.7221 10.632 35.353 10.5502 34.0331C10.4717 32.7568 10.8317 31.9594 11.2844 31.4696C12.0196 30.6722 13.1225 30.5554 14.0039 30.8216C14.6606 31.019 15.1591 31.4336 15.3751 31.8088C15.7547 32.4677 17.8317 36.169 20.5862 37.8784C21.5952 38.5046 22.2956 39.5747 22.7297 40.8346C23.2915 42.4644 23.4159 44.4116 23.4082 45.7872C23.3995 47.2871 22.181 48.4979 20.6811 48.4979ZM28.3182 48.4979C26.8183 48.4979 25.5998 47.2871 25.59 45.7872C25.5834 44.4116 25.7067 42.4644 26.2696 40.8346C26.7037 39.5747 27.403 38.5046 28.4131 37.8784C31.1675 36.169 33.2445 32.4677 33.6242 31.8088C33.8162 31.475 34.2209 31.1118 34.7718 30.898C35.4579 30.6318 36.3524 30.5958 37.0822 30.982C37.8414 31.3834 38.5592 32.2484 38.449 34.0331C38.3672 35.353 37.836 36.7232 37.1509 37.9526C37.3909 37.8228 37.6331 37.6897 37.8742 37.5533C39.3621 36.7123 40.8293 35.7709 41.5329 34.896C42.1002 34.1891 42.3849 33.228 42.579 32.2746C42.8038 31.1674 42.8943 30.0591 43.0208 29.2333C43.1256 28.5515 43.2794 28.0192 43.4681 27.7017C43.6645 27.3701 43.9164 27.1661 44.1826 27.0505C45.0019 26.696 46.4014 26.4429 47.369 27.1705C47.9788 27.6287 48.5373 28.5112 48.497 30.2282C48.4446 32.4274 47.9777 35.8668 47.0374 38.1958C46.5585 39.3816 45.9324 40.2968 45.2353 40.7779C44.2557 41.4542 41.8307 42.7153 39.757 44.1738C38.5516 45.0214 37.4531 45.9148 36.9644 46.8158C36.5509 47.7845 35.6019 48.4183 34.5503 48.4292C32.9489 48.498 30.0952 48.4979 28.3182 48.4979ZM14.0104 25.472C9.95898 25.8407 5.33265 25.3007 2.82148 23.9284C1.31828 23.1059 0.499023 21.9682 0.499023 20.6668C0.499023 16.287 3.38218 12.5213 7.46091 11.017C6.20315 9.91631 5.4079 8.30076 5.4079 6.49974C5.4079 3.18788 8.09688 0.5 11.4076 0.5C14.7195 0.5 17.4074 3.18788 17.4074 6.49974C17.4074 8.30076 16.6133 9.9174 15.3544 11.017C17.2678 11.7228 18.9193 12.9249 20.1313 14.4543C20.2698 14.3965 20.4094 14.3409 20.5513 14.2896C19.2935 13.1889 18.4983 11.5733 18.4983 9.77233C18.4983 6.46047 21.1872 3.77259 24.498 3.77259C27.8099 3.77259 30.4977 6.46047 30.4977 9.77233C30.4977 11.5733 29.7036 13.1889 28.4458 14.2896C28.5876 14.3419 28.7273 14.3965 28.8658 14.4543C30.0778 12.926 31.7293 11.7228 33.6427 11.017C32.3849 9.9174 31.5897 8.30076 31.5897 6.49974C31.5897 3.18788 34.2776 0.5 37.5894 0.5C40.9013 0.5 43.5892 3.18788 43.5892 6.49974C43.5892 8.30076 42.7939 9.91631 41.5362 11.017C45.616 12.5213 48.4981 16.287 48.4981 20.6668C48.4981 21.9682 47.6799 23.1059 46.1756 23.9284C43.6645 25.3007 39.0381 25.8407 34.9856 25.472C34.5525 26.216 33.7943 26.864 32.7525 27.3723C30.7508 28.3497 27.6266 28.8624 24.498 28.8624C21.3705 28.8624 18.2463 28.3497 16.2445 27.3723C15.2017 26.864 14.4435 26.216 14.0104 25.472ZM37.5894 10.3178C39.697 10.3178 41.4075 8.60729 41.4075 6.49974C41.4075 4.3922 39.697 2.68172 37.5894 2.68172C35.4819 2.68172 33.7714 4.3922 33.7714 6.49974C33.7714 8.60729 35.4819 10.3178 37.5894 10.3178ZM24.498 15.7721C22.9697 15.7721 21.5298 16.1419 20.2775 16.7909C17.5983 18.1807 15.7711 20.8555 15.7711 23.9394C15.7711 23.9928 15.7766 24.0452 15.7864 24.0965C15.7896 24.1172 15.7929 24.1379 15.7962 24.1597C15.9184 24.6942 16.4867 25.063 17.2012 25.412C18.9695 26.2738 21.7359 26.6807 24.498 26.6807C27.2611 26.6807 30.0276 26.2738 31.7959 25.412C32.5093 25.063 33.0787 24.6942 33.2009 24.1586C33.2031 24.1379 33.2063 24.1172 33.2107 24.0954C33.2205 24.0452 33.2249 23.9928 33.2249 23.9394C33.2249 20.8566 31.3988 18.1807 28.7196 16.7909C27.4673 16.1419 26.0274 15.7721 24.498 15.7721ZM11.4076 10.3178C13.5152 10.3178 15.2257 8.60729 15.2257 6.49974C15.2257 4.3922 13.5152 2.68172 11.4076 2.68172C9.30119 2.68172 7.58963 4.3922 7.58963 6.49974C7.58963 8.60729 9.30119 10.3178 11.4076 10.3178Z"
                              fill="currentColor"
                            />
                          </_Builtin.DOM>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "empower_card-text-wrap"
                            )}
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
                                className={_utils.cx(
                                  _styles,
                                  "heading-style-h5"
                                )}
                                tag="div"
                              >
                                {"Why do we do this"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "text-size-regular",
                                "text-weight-semibold"
                              )}
                            >
                              {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim neque, varius ut lorem eget, blandit venenatis felis. Sed tellus magna, elementum non commodo sit amet, finibus eu nunc. Integer bibendum gravida scelerisque."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "empower_card-background",
                            "is-purple"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "empower_card-texture",
                              "_4"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6883f2bbdba50b3268a5c7ff/6883f2bbdba50b3268a5c85b_blue_purple.avif"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "hide")}
                value="%3Cscript%3E%0Avar%20Webflow%20%3D%20Webflow%20%7C%7C%20%5B%5D%3B%0AWebflow.push(function%20()%20%7B%0A%0Avar%20tabTimeout%3B%0AclearTimeout(tabTimeout)%3B%0AtabLoop()%3B%0A%0Afunction%20tabLoop()%20%7B%0AtabTimeout%20%3D%20setTimeout(function()%20%7B%0Avar%20%24next%20%3D%20%24('.empower_tab-menu').children('.w--current%3Afirst').next()%3B%0Aif(%24next.length)%20%7B%0Aif%20(%24(%22.navbar_menu-button%22).hasClass(%22w--open%22))%20%7B%0AtabLoop()%3B%0A%7Delse%7B%0A%24next.removeAttr(%22href%22).click()%3B%0A%7D%0A%7D%20else%20%7B%0Aif%20(%24(%22.navbar_menu-button%22).hasClass(%22w--open%22))%7B%0AtabLoop()%3B%0A%7Delse%7B%0A%24('.empower_link-block%3Afirst').removeAttr(%22href%22).click()%3B%0A%7D%0A%7D%0A%7D%2C%204000)%3B%20%2F%2F%204%20seconds%0A%7D%0A%0A%24('.empower_link-block').click(function()%20%7B%0AclearTimeout(tabTimeout)%3B%0AtabLoop()%3B%0A%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
