function Footer() {
  return (
    <footer>
      <div className="h-0.5 w-full border-b-2 border-t-2 border-black"></div>

      <nav className="container flex justify-between items-center py-[35px]">
        <a href="#" className="font-primary text-5xl">
          Red1
        </a>

        <ul className="flex font-primary items-center justify-center gap-3 text-2xl">
          <li className="relative __navigationEffect">
            <a href="#">Writing</a>
          </li>
          <li className="relative __navigationEffect">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
