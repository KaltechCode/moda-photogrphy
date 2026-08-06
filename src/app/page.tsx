import React from "react";
import { Metadata } from "next";
import HomePage from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Moda Studio",
  description: "Document august events with quality images",
};

const Home = () => {
  return <HomePage />;
};

export default Home;
