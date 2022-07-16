import Head from "next/head";
import React from "react";
import nextPackage from "next/package.json";
import { Hero } from "components/hero/Hero";

export default function Home({}) {
  return (
    <div>
      <Hero />
    </div>
  );
}
