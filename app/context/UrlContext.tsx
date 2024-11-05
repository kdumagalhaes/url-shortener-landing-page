import { createContext, ReactNode, useContext, useState } from "react";

interface UrlProviderProps {
  children: ReactNode;
}

interface UrlContextModel {
  getUrl: (url: string) => void;
  url: string;
}

export const UrlContext = createContext({} as UrlContextModel);

export const UrlProvider = ({ children }: UrlProviderProps) => {
  const [url, setUrl] = useState("");

  const getUrl = (url: string) => {
    setUrl(url);
  };

  const value = {
    getUrl,
    url,
  };

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export const useUrl = () => {
  const context = useContext(UrlContext);

  if (context === undefined) {
    throw new Error("useUrl must be used within UrlContext");
  }

  return context;
};
