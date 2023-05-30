import classes from "./MainHeader.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const MainHeader = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeIcon = theme === "dark" ? faSun : faMoon;

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const isTop = window.scrollY < 100;
        if (isTop) {
          header.classList.remove("fixed");
        } else {
          header.classList.add("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" w-full bg-green-800 dark:bg-[#023602] text-white flex justify-between p-3 h-12 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <Link to="/">
          <h1>RENEW TECH</h1>
        </Link>
      </div>

      <nav>
        <div className=" right-8 md:hidden scale-150">
          <MenuIcon onClick={showMenu} className="scale-100 cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-2 uppercase bg-white/10">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <button onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={themeIcon} />
            </button>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default MainHeader;
