import pokemon from '../../pokemon.json';

export default (req, res) => {
  const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;
  const pokemons = pokemon.filter(({ name }) => name.match(filter)).slice(0, 10)

  res.statusCode = 200
  res.json(pokemons)
}
