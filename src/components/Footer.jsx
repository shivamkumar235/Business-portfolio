import { profile } from "../data";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-200 py-6 text-center text-stone-500 text-sm">
      © {year} {profile.name}
    </footer>
  );
}

export default Footer;
