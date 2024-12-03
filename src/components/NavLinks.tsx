export function NavLinks() {
  const links = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Events" },
    { href: "#", label: "Contact" },
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}