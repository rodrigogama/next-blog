import Head from 'next/head';
import Link from 'next/link';

const getPokemon = (name) => {
  return fetch(`http://localhost:4000/api/pokemon?name=${escape(name)}`).then(async res => {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  });
}

export async function getServerSideProps(context) {
  const data = await getPokemon(context.params.name);

  return {
    props: {
      pokemon: {
        ...data,
        image: `/images/${data.id}.png`
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
          ) : <h1>{`Pokemon "${name}" não encontrado.`}</h1>}
        </div>
      </main>
    </div>
  );
}