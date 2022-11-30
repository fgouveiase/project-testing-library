import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const encounterPokemon = screen.getByRole('heading', {
      name: /encountered pokémon/i,
    });
    expect(encounterPokemon).toBeInTheDocument();
  });

  test('se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextPokemonBtn = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    userEvent.click(nextPokemonBtn);
    const nextPokemon = screen.getByText(/charmander/i);

    expect(nextPokemon).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const allPokemon = screen.getAllByTestId('pokemon-name');

    expect(allPokemon).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const btnLength = 7;
    const filterBtn = screen.getAllByTestId('pokemon-type-button');

    expect(filterBtn).toHaveLength(btnLength);

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    expect(allBtn).toBeInTheDocument();
    expect(filterBtn[0]).toHaveTextContent('Electric');
    expect(filterBtn[1]).toHaveTextContent('Fire');
    expect(filterBtn[2]).toHaveTextContent('Bug');
    expect(filterBtn[3]).toHaveTextContent('Poison');
    expect(filterBtn[4]).toHaveTextContent('Psychic');
    expect(filterBtn[5]).toHaveTextContent('Normal');
    expect(filterBtn[6]).toHaveTextContent('Dragon');
    userEvent.click(filterBtn[0]);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();

    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);
    expect(allBtn).toBeInTheDocument();
  });
});
