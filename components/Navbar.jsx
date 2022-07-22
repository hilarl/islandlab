const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full px-5 py-3 top-0 left-0 z-50 glassmorphism flex justify-between items-center">
        <div>
          <img className="max-h-[2.5rem]" src="/logo.png" alt="" />
        </div>
        <ul className="flex gap-3 items-center">
          <li>Home</li>
          <li>Program</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
