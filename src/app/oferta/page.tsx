/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Header } from "@/components/Header";
import { OfferHero } from "@/components/OfferHero";
import { Footer } from "@/components/Footer";

export default function OfferPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      <OfferHero />
      <Footer />
    </main>
  );
}
