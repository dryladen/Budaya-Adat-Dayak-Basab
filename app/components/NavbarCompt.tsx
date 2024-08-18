"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { MenuItems } from "../lib/navigation";

type NavLinkProps = {
  title: string;
  link: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({ title, link, setMenuOpen }: NavLinkProps) => {
  return (
    <>
      <NavbarItem className="hover:font-bold text-gray-600 transition-transform hover:border-b-large hover:border-yellow-400 hover:animate-appearance-in">
        <Link onClick={() => setMenuOpen(false)} href={link}>
          {title}
        </Link>
      </NavbarItem>
    </>
  );
};


const NavbarCompt = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="md:px-6 lg:px-16 md:py-5 z-30 fixed w-full"
    >
      <NavbarBrand className="hidden sm:flex">
        <Link href="#" className="font-bold text-2xl text-gray-900">
          Budaya Adat Dayak Basab
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-12 text-gray-600 font-medium "
        justify="end"
      >
        {MenuItems.map((item, index) => (
          <NavLink key={index} title={item.title} link={item.link} setMenuOpen={setIsMenuOpen} />
        ))}
      </NavbarContent>
      {/* Mobile View */}
      <NavbarContent className="sm:hidden pr-3">
        <NavbarBrand>
          <p className="font-bold text-xl text-gray-900">
            Budaya Adat Dayak Basab
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          className="text-gray-600 "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="pt-8">
        {MenuItems.map((item, index) => (
          <NavLink key={index} title={item.title} link={item.link} setMenuOpen={setIsMenuOpen}  />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarCompt;
