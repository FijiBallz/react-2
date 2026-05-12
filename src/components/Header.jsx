function Header() {
  return (
    <header>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li><a href="#about">O mnie</a></li>
          <li><a href="#projects">Projekty</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;