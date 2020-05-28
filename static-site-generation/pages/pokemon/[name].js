import Head from 'next/head';
import Link from 'next/link';
import pokemons from '../../pokemon.json';

export async function getStaticPaths() {
  return {
    paths: pokemons.map(p => ({
      params: {
        name: p.name.toLowerCase(),
      }
    })),
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const pokemon = pokemons.find(p => p.name.toLocaleLowerCase() === context.params.name);
  return {
    props: {
      pokemon: {
        ...pokemon,
        image: `/images/${pokemon.id}.png`
      }
    }, // will be passed to the page component as props
  }
}

export default ({ pokemon }) => {
  return (
    <div className="container">
      <Head>
        <title>Pokemon - {pokemon.name}</title>
      </Head>

      <main>
        <Link href="/">
          <a>Voltar</a>
        </Link>
        <div className="row">
          {pokemon ? (
            <div className="card">
              <h3 className="card--title">{pokemon.name}</h3>
              <span className="card--subtitle">{pokemon.type.join(', ')}</span>
              <img src={pokemon.image} alt={pokemon.name} />
              {Object.entries(pokemon.base).map(([key, value]) => (
                <span className="card--details" key={key}>
                  <strong>{key}:</strong>
                  {value}
                </span>
              ))}
            </div>
          ) : <h1>{`Pokemon "${pokemon.name}" não encontrado.`}</h1>}
        </div>
      </main>
    </div>
  );
}