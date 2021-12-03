import React from 'react';

interface IHeaderContext {
  title: string;
  setTitle: (title: string) => void;
}

export const HeaderContext = React.createContext<IHeaderContext>({
  title: '',
  setTitle: () => null,
});

export function HeaderProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [title, setTitle] = React.useState('');
  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader(newTitle: string) {
  const { title, setTitle } = React.useContext(HeaderContext);
  React.useEffect(() => {
    if (title !== newTitle) {
      setTitle(newTitle);
      document.title = `Real Estate App - ${newTitle}`;
    }
  }, [newTitle, title, setTitle]);
}
