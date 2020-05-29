import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = React.useState("");
  const pokemons = [];

  return (
    <div className="container">
      <Head>
        <title>Pokemon - Client Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input
          placeholder="Search for a pokemon"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="row">
          {pokemons &&
            pokemons.map((pokemon) => (
              <Link
                key={pokemon.id}
                href={`pokemon/${pokemon.name.toLowerCase()}`}
              >
                <div className="card clickable">
                  <h3 className="card--title">{pokemon.name}</h3>
                  <span className="card--subtitle">
                    {pokemon.type.join(", ")}
                  </span>
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
