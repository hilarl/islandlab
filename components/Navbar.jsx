import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="row">
      <div className="col-md-6 col-12">
        <img id="logo" src="img/logo.png" />
      </div>
      <div id="nav" className="col-md-6 col-12">
        <Link href="/">HOME</Link>
        <Link href="/unicef">PROGRAM</Link>
        <Link href="/projects">PROJECTS</Link>
        <button
          style={{
            border: 0,
            background: "transparent",
          }}
          onClick={async() => {
            if (router.pathname != "/") {
              await router.push("/");
            }
            document.querySelector("#team").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          TEAM
        </button>
        <Link href="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};
export default Navbar;
