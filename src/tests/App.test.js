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

describe('Teste se a aplicação é redirecionada  e', () => {
  test('a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const pathLocation = '/';
    history.push(pathLocation);
    expect(history.location.pathname).toBe(pathLocation);
  });
  test('a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const pathLocation = '/about';
    history.push(pathLocation);
    expect(history.location.pathname).toBe(pathLocation);
  });
  test(' a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites', () => {
    const { history } = renderWithRouter(<App />);
    const pathLocation = '/favorites';
    history.push(pathLocation);
    expect(history.location.pathname).toBe(pathLocation);
  });
  test('a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    const pathLocation = '/not-found';
    history.push(pathLocation);
    expect(history.location.pathname).toBe(pathLocation);
  });
});
