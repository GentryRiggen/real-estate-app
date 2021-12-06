import { HeaderContext } from 'domains/application/contexts/HeaderContext';
import { useContext } from 'react';

export default function Header() {
  const { title } = useContext(HeaderContext);

  return (
    <nav className="sticky top-0 z-10 h-16 sm:h-24 flex items-center bg-header">
      <div className="container mx-auto py-4 px-5">
        <h1 className="text-foreground text-header-title-sm md:text-header-title-base font-semibold">
          {title}
        </h1>
      </div>
    </nav>
  );
}
