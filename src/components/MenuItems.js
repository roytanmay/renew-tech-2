import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";

const MenuItems = ({ showMenu, active }) => {
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
  return (
    <ul
      className={
        active
          ? "z-20 flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <CloseIcon onClick={showMenu} className="cursor-pointer" />
      <li>
        <Link to="/">Home</Link>
      </li>
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
  );
};

export default MenuItems;
