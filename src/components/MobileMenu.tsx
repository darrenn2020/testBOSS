import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
      }`}
    >
      <div className="px-4 pt-2 pb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center gap-4">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}