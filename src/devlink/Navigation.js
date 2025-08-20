"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4e22bb90-5fea-11ee-00b4-de4e417b5058","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4e22bb90-5fea-11ee-00b4-de4e417b5058","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4e22bb90-5fea-11ee-00b4-de4e417b5058","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4e22bb90-5fea-11ee-00b4-de4e417b5058","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c839|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c839|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746197082514},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c839|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c839|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746197082514},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"341c2c12-2755-a388-c9cf-3af2e6cd3553","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"341c2c12-2755-a388-c9cf-3af2e6cd3553","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746197307552},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"341c2c12-2755-a388-c9cf-3af2e6cd3553","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"341c2c12-2755-a388-c9cf-3af2e6cd3553","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746197307552},"e-41":{"id":"e-41","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c83a|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c83a|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746206291816},"e-42":{"id":"e-42","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c83a|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c83a|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746206291816},"e-43":{"id":"e-43","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c83b|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c83b|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746206521090},"e-44":{"id":"e-44","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6883f2bbdba50b3268a5c83b|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6883f2bbdba50b3268a5c83b|8d03a055-b9ad-e646-63e6-bdc5c222c242","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746206521090}},"actionLists":{"a":{"id":"a","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c5"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c7"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c4"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c4"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c7"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c7"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c4"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c4"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["47ecc7e2-531e-7d37-199c-3b4046c822c5"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar_component")}
      id={_utils.cx(
        _styles,
        "w-node-_341c2c12-2755-a388-c9cf-3af2e6cd3553-e6cd3553"
      )}
      data-w-id="341c2c12-2755-a388-c9cf-3af2e6cd3553"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar_logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_logo")}
            tag="div"
          >
            {"GiveWell"}
          </_Builtin.Block>
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar_menu", "is-page-height-tablet")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_menu-links")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar_link")}
              options={{
                href: "#",
              }}
            >
              {"Our mission"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar_link")}
              options={{
                href: "#",
              }}
            >
              {"Empower"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar_link")}
              options={{
                href: "#",
              }}
            >
              {"The team"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navbar_link")}
              options={{
                href: "#",
              }}
            >
              {"Our impact"}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_menu-buttons")}
            tag="div"
          >
            <Button
              buttonText="Donate"
              buttonLink={{
                href: "#",
              }}
              variant="Full Red"
            />
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-icon1")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-top")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-middle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon1_line-middle-inner")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-bottom")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
