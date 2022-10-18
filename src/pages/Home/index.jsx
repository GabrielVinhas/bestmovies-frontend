import { Container, ButtonAdd, Profile, Logout, Avatar } from './styles'
import { Input } from '../../components/Input';
import { FiPlus } from 'react-icons/fi'
import { MovieCard } from '../../components/MovieCard'
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useNavigate } from 'react-router-dom';

export function Home() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovieNotes()
  }, [search])

  return (
    <Container>
      <header>
        <h2>RocketMovies</h2>
        <Input 
          type="text" 
          placeholder="Pesquisar pelo título" 
          onChange={e => setSearch(e.target.value)}
          />
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <Logout onClick={signOut}>sair</Logout>
          </div>
          <Avatar to="/profile">
            <img src={avatarUrl} alt="Foto do Usuário" />
          </Avatar>
        </Profile>
      </header>

      <section>
        <div>
          <h1>Meus filmes</h1>
          <ButtonAdd to="/new">
            <FiPlus />
            Adicionar filme
          </ButtonAdd>
        </div>

        <main>
          {
            movies.map(movie => (
              <MovieCard
                key={String(movie.id)} 
                data={movie}
                onClick={() => {handleDetails(movie.id);}}
              />
            ))
          }

        </main>
      </section>
    </Container>
  )
}
