import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('se o topo da aplicação contém um conjunto fixo de links de navegação e', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', {
      name: /Home/i,
    });
    expect(linkHome).toBeInTheDocument();
  });

  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', {
      name: /About/i,
    });
    expect(linkAbout).toBeInTheDocument();
  });
  test('O terceiro link deve possuir o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const favoritePokemon = screen.getByRole('link', {
      name: /Favorite Pokémon/i,
    });
    expect(favoritePokemon).toBeInTheDocument();
  });
});
