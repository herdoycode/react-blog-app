import React from "react";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";
import AuthContext from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

interface Auth {
  _id: string;
}

const AuthProvider = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const { _id } = jwtDecode<Auth>(token!);

  const { data: user } = useAuth(_id);
  if (user)
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
