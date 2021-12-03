import { HeaderContext } from 'domains/application/contexts/HeaderContext';
import { useContext } from 'react';

export default function Header() {
  const { title } = useContext(HeaderContext);

  return (
    <nav className="sticky top-0 h-16 sm:h-24 flex items-center bg-header">
      <div className="container mx-auto">
        <h1 className="text-light-text text-header-title-sm md:text-header-title-base font-semibold">
          {title}
        </h1>
      </div>
    </nav>
  );
}
