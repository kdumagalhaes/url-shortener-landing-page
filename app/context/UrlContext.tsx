import { createContext, ReactNode, useContext, useState } from "react";

interface UrlProviderProps {
  children: ReactNode;
}

interface UrlState {
  request: string;
  result: string;
}

interface UrlContextModel {
  getUrl: (request: string, result: string) => void;
  url: UrlState | null;
}

export const UrlContext = createContext({} as UrlContextModel);

export const UrlProvider = ({ children }: UrlProviderProps) => {
  const [url, setUrl] = useState<UrlState | null>(null);

  const getUrl = (request: string, result: string) => {
    setUrl({ request, result });
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
