import Logo from "../components/Logo";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Dropdown from "../components/Header/Dropdown";
import NavBar from "../components/Header/navBar";

// Ver como hacer responsive, con la navBar me tira error de Hydratation
// Como que no matchea el dom con lo que renderiza Next.

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <Logo />
        <div className="flex space-x-16">
          <div>
            <div
              className={`flex-1 flex-col justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <Dropdown name="Home" />
                <Dropdown name="About" />
                <Dropdown name="Skills" />
                <Dropdown
                  name="Proyects"
                  items={["Support", "Information", "Contact", "Proyects"]}
                />
                <Dropdown name="Contact" />
              </ul>
            </div>
          </div>
          {/* <BurgerMenu navbar={navbar} setNavbar={setNavbar} /> */}
          {renderThemeChanger()}
        </div>
      </div>
      <div className="h-2 w-full border-b-2 border-black  dark:border-slate-300"></div>
    </header>
  );
};

export default Header;
