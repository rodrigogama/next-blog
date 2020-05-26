import pokemon from '../../pokemon.json';

export default (req, res) => {
  const filter = req.query.name ? new RegExp(req.query.name, "i") : /.*/;
  const foundPokemon = pokemon.find(({ name }) => name.match(filter))

  if (foundPokemon) {
    res.statusCode = 200
    res.json(foundPokemon);
  } else {
    res.statusCode = 204;
    res.json({});
  }
}
