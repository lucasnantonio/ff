
import Header from '../components/Header';
import React, { Component } from 'react';
import { initGA, logPageView } from '../utils/analytics';

const Index = () => (
  <div>
    <Header />
    <div className="w-100 vh-100 bg-green">
      <h1>Sobre</h1>
      <p>
        Criamos esse site para ajudar você a planejar suas finanças e chegar à sua independência
        financeira.
      </p>
    </div>
  </div>
);

export default Index;
