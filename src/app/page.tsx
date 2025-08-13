"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Navigation, Footer, BasicSection } from "@/devlink";

export default function Home() {
  return (
    <main>
      <Navigation />
      <BasicSection>your code</BasicSection>
      <Footer />
    </main>
  );
}
