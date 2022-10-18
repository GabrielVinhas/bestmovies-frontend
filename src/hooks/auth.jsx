import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  
  async function signIn({ email, password }) {
    
    try {
      setLoading(true);
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@bestmovies:user", JSON.stringify(user));
      localStorage.setItem("@bestmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setLoading(false);
      } else {
        alert ("Não foi possível entrar");
        setLoading(false);
      }
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      setLoading(true);
      await api.put('/users', user);

      localStorage.setItem("@bestmovies:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("Perfil atualizado.");
      setLoading(false);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setLoading(false);
      } else {
        alert("Não foi possível atualizar o perfil.")
        setLoading(false);
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@bestmovies:user");
    localStorage.removeItem("@bestmovies:token");

    setData({});
    setLoading(false);
  }

  useEffect(() => {
    const user = localStorage.getItem("@bestmovies:user");
    const token = localStorage.getItem("@bestmovies:token");

    if (token && user) {
      api.defaults.headers.authorization = "Bearer " + token;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      loading,
      setLoading,
      signOut, 
      updateProfile,
      user: data.user 
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
