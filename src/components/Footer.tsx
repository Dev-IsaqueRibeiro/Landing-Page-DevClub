const Footer = () => (
  <footer className="py-10 border-t border-border/50">
    <div className="container mx-auto px-4 text-center">
      <span className="text-xl font-extrabold">
        <span className="text-[#5fd100]">&lt; Dev</span>
        <span className="text-[#722eaf]">Club &gt;</span>
      </span>
      <p className="text-muted-foreground text-sm mt-3">
        © {new Date().getFullYear()} DevClub. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
export default Footer;
