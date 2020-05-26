import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const usePokemon = (query) => {
  const [pokemons, setPokemons] = React.useState(null);

  React.useEffect(() => {
    const getPokemon = async () => {
      const data = await fetch(`/api/search?q=${escape(query)}`).then(res => res.json());
      setPokemons(data.map(e => ({
        ...e,
        image: `/images/${e.id}.png`
      })));
    }

    getPokemon();
  }, [query]);

  return pokemons;
}


export default function Home() {
  const [query, setQuery] = React.useState('');
  const pokemons = usePokemon(query);

  return (
    <div className="container">
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input placeholder="Search for a pokemon" type="search" value={query} onChange={event => setQuery(event.target.value)} />

        <div className="row">
          {pokemons && pokemons.map(pokemon => (
            <Link key={pokemon.id} href={`pokemon/${pokemon.name.toLowerCase()}`}>
              <div className="card clickable">
                <h3 className="card--title">{pokemon.name}</h3>
                <span className="card--subtitle">{pokemon.type.join(', ')}</span>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
