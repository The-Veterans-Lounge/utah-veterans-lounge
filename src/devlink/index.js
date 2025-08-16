"use client";

console.warn(
  "⚠️ Avoid importing components from 'index.js' for better performance. This practice is deprecated and may be removed in the future."
);

export * as _Builtin from "./_Builtin";
export * from "./devlinkContext";
export * from "./interactions";
export * from "./utils";
export * from "./devlink";
export * from "./BasicSection";
export * from "./Button"; // Error: Unexpected error
export * from "./DevLinkProvider";
export * from "./EmpowerSection";
export * from "./Footer";
export * from "./FooterComponent";
export * from "./GlobalStyles";
export * from "./HeroSection";
export * from "./IconColor";
export * from "./IconSize";
export * from "./MissionSection";
export * from "./NavbarComponent";
export * from "./Navigation";
export * from "./StatsSection";
export * from "./TeamSection";
export * from "./VisionSection";
