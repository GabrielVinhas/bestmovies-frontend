import { Container, Profile, Logout, Avatar } from './styles';
import { Input } from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input 
        type="text" 
        placeholder="Pesquisar pelo título" 
        />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <Logout to="/" onClick={signOut}>sair</Logout>
        </div>
        <Avatar to="/profile">
          <img src={avatarUrl} alt="Foto do Usuário" />
        </Avatar>
      </Profile>
    </Container>
  )
}
