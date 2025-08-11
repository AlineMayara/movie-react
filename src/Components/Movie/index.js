import './Movie.module.css'

const Movie = props => {
  return (
    <div className="movie">
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </div>
  )
}

export default Movie

/*
Nesse exemplo, a classe movie foi criada para estilizar o componente Movie.
A props image foi usada para passar a imagem do filme, e o props title foi usada para passar o titulo do filme.
No return, foi usado a tag img para exibir a imagem do filme, e as tags span para exibir o titulo do filme.
*/
