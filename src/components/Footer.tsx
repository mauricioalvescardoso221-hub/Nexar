// A simple footer to close the page.
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center text-sm ">
        <p>&copy; {currentYear} Maurício Eletricista. Todos os direitos reservados.</p>
        <p className="mt-1">Atendendo em Canoas e região, RS.</p>
      </div>
    </footer>
  );
};

export default Footer;
