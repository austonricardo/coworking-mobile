import React, { createContext, useState, useEffect, useContext } from "react";
import { AsyncStorage } from "react-native";
import api from "../services/api";
import { ResponseSignInUser, User } from "../models/user";
import { AxiosResponse } from "axios";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(
    email: string,
    password: string
  ): Promise<AxiosResponse<ResponseSignInUser>>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoregedData() {
      const storegedUser = await AsyncStorage.getItem("@Auth:user");
      const storegedToken = await AsyncStorage.getItem("@Auth:token");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (storegedUser) {
        
        if(storegedToken){
          //adicao de token para chamadas futuras, depois adicionar checagem de expiração de token e renovação
          api.defaults.headers['Authorization'] = `Bearer ${storegedToken}`;
        }

        setUser(JSON.parse(storegedUser));

        setLoading(false);
      } else if (!storegedUser) {
        setLoading(false);
      }
    }

    loadStoregedData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post<ResponseSignInUser>("/user/login", {
      email,
      password,
    });
    
    if (response.data.user) {
      setUser(response.data.user);

      //adicao e token para chamadas futuras
      api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem(
        "@Auth:user",
        JSON.stringify(response.data.user)
      );
    }
    return response;
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
