"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="service">Services</Link>
          </li>
          <li>
            <Link href="faq">Faq's</Link>
          </li>
          <li>
            <Link href="help">Help</Link>
          </li>
          <li>
            <Link href="coverage">Coverage</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        <li className="active">
          <Link href="/" className="border-none">Home</Link>
        </li>
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="service">Services</Link>
            </li>
            <li>
              <Link href="faq">Faq's</Link>
            </li>
            <li>
              <Link href="help">Help</Link>
            </li>
            <li>
              <Link href="coverage">Coverage</Link>
            </li>
            <li className="mean-last">
              <Link href="contact">Contact</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
