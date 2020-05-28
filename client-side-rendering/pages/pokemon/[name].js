import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const usePokemon = (name) => {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    if (!name) {
      setPokemon(null);
      return;
    }

    const getPokemon = async () => {
      const data = await fetch(`/api/pokemon?name=${escape(name)}`).then(async res => {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
      });

      if (data && Object.keys(data).length > 0) {
        setPokemon({
          ...data,
          image: `/images/${data.id}.png`
        });
      }
    }

    getPokemon();
  }, [name]);

  return pokemon;
}

export default () => {
  const { query: { name } } = useRouter();

  if (!name) return null;

  const pokemon = usePokemon(name);

  return (
    <div className="container">
      <Head>
        <title>Pokemon - {name}</title>
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