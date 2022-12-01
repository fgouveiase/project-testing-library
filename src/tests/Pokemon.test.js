import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const cardName = screen.getByTestId('pokemon-name');
    const cardType = screen.getByTestId('pokemon-type');
    const cardWeight = screen.getByText(/average weight: 6\.0 kg/i);
    const cardImg = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    // const cardImgSrc = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(cardName).toBeInTheDocument();
    expect(cardType).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();
    expect(cardWeight).toHaveTextContent('Average weight: 6.0 kg');
    expect(cardImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(cardImg.alt).toBe('Pikachu sprite');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
    renderWithRouter(<App />);

    const pokedexLink = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(pokedexLink).toBeInTheDocument();
    userEvent.click(pokedexLink);

    expect((pokedexLink).href).toContain('/pokemon/25');
  });

  test('O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg', () => {
    renderWithRouter(<App />);

    const pokedexLink = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(pokedexLink);

    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkbox);

    const starImg = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    // const starSrc = '/star-icon.svg';

    expect(starImg.src).toContain('/star-icon.svg');
    expect(starImg.alt).toContain('Pikachu is marked as favorite');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const pokeType = screen.getByTestId('pokemon-type');
    expect(pokeType).toContainHTML('Electric');
  });
});
