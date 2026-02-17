import React from 'react';

export interface PriceOption {
  title: string;
  price: string;
  badge: string;
  description: string;
  highlight: boolean;
}

export interface SpecItem {
  // Using React.ReactNode ensures the icon can be any valid React element and resolves the 'Cannot find namespace JSX' error.
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}