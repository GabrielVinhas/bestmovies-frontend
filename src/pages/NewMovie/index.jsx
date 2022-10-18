import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { NewTag } from '../../components/NewTag';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { Container, Form, RemoveMovie } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState()
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o titulo do filme!")
    }

    if (!rating) {
      return alert("Informe sua nota de avaliação sobre o filme!")
    }

    if (!description) {
      return alert("Digite alguma observação sobre o filme!")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    setLoading(true);

    await api.post("/movie_notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme adicionado com sucesso!")
    navigate("/");
  }

  return (
    <Container>
      <Header />
      
      <main>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="input-values">
            <Input
              type="text" 
              placeholder="Titulo" 
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" max="5"
              onChange={e => setRating(e.target.value)}
            />

          </div>

          <Textarea
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NewTag 
                    key={String(index)}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}}
                  />
                ))
              }

              <NewTag 
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <div className="buttons">
            <RemoveMovie type="button">Excluir filme</RemoveMovie>
            <Button 
              disabled={loading}
              title={loading ? "Salvando..." :"Salvar Filme"}
              onClick={handleNewMovieNote} 
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}
