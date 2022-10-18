import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Ratings } from '../../components/Ratings';
import { Container, Content, TitleRating, MovieInfo, AuthorInfo, Tags, Description } from './styles';
import { FiClock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';
import { format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';


export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir esse filme?")

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchMoviesNotes() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data);
    }

    fetchMoviesNotes()
  }, []);

  return (
    <Container>
      <Header />

        {
          data &&
          <main>
          <Content>
            <div className='buttons'>
              <Link to="/">
                <FiArrowLeft />
                Voltar
              </Link>
              <ButtonText 
                title="Apagar Filme" 
                onClick={handleRemove}
              />
            </div>
            <MovieInfo>
              <TitleRating>
                <h1>{data.title}</h1>
                <Ratings rating={data.rating} />
              </TitleRating>
              <AuthorInfo>
                <div>
                  <img
                    src={avatarUrl}
                    alt={`Foto de ${user.name}`}
                  />
                  <span>{`Por ${user.name}`}</span>
                </div>

                <div>
                  <FiClock />
                  <span>{format(new Date(data.created_at), "dd'/'MM'/'yy 'às' HH':'mm", {
                    locale: ptBR,
                  })}</span>
                </div>
              </AuthorInfo>
                
              {
                data.tags &&
                <Tags>
                  {
                    data.tags.map(tag => (
                      <Tag 
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }
                </Tags>
              } 
              <Description>
                <p>
                 {data.description}
                </p>
              </Description>
            </MovieInfo>
          </Content>
        </main>
       }
    </Container>
  )
}
