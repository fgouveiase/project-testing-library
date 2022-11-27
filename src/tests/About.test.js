import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('o arquivo teste About.test.js contempla 100% dos casos de uso criados pelo Stryke', () => {
  test('a página contém um heading h2  com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByRole('heading', {
      name: /about pokédex/i,
    });
    expect(aboutPokedex).toBeInTheDocument();
  });

  test('a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const subtitle1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    const subtitle2 = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    expect(subtitle1 && subtitle2).toBeInTheDocument();
  });

  test('a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(img).toHaveAttribute('src', src);
  });
});
