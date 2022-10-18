import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile() {
  const { user, updateProfile, loading } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }
    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar} 
            />
          </label>
        </Avatar>

        <Input 
          type="text" 
          icon={FiUser} 
          placeholder="Nome" 
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email" 
          icon={FiMail} 
          placeholder="E-mail"
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock} 
          placeholder="Senha atual" 
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          type="password" 
          icon={FiLock} 
          placeholder="Nova senha" 
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button
          disabled={loading}
          title={loading ? "Salvando..." : "Salvar"}
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}
