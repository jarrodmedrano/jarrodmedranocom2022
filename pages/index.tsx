import Head from "next/head";
import React from "react";
import { Hero } from "components/hero/Hero";
import Contact from "./contact";
import NavbarTwoColumns from "components/nav/Nav";
import { Background } from "components/background/Background";
import { Section } from "components/layout/Section";
import { tw } from "twind";

export default function Home({}) {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns>
          <li className={tw`mr-5`}>
            <a href="https://github.com/jarrodmedrano" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jarrod-medrano/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </NavbarTwoColumns>
      </Section>
      <Hero />
    </Background>
  );
}
