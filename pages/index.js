import React, { Component } from "react";
import { hotjar } from "react-hotjar";
import { initGA, logPageView, logEvent } from "../utils/analytics";
import Questions from "../components/Questions";
import Answer from "../components/Answer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TipsContainer from "../components/TipsContainer";
import NavBar from "../components/NavBar";
import colors from "../components/Colors";
import { getRetirementResults, getStudyCasesResults } from "../utils/math";
import { isNumber, valueByInputType } from "../utils/input";

const Index = () => {
  return <Hero />;
};

export default Index;
