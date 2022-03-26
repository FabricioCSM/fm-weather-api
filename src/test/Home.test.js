import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "../pages/Home";

test('Verifica se existe header', () => {
  render(<Home />);
  const header = screen.getByRole('header');
  expect(header).toBeInTheDocument();
});

test('Verifica se existe searchBar em header', () => {
  render(<Home />);
  // const header = screen.getByRole('header');
  const searchBar = screen.getByRole('input');
  expect(searchBar).toBeInTheDocument();
});

