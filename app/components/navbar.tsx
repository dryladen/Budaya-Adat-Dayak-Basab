"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { HomeIcon } from "lucide-react";

export default function NavbarCompt() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Sejarah", "Blog", "Lokasi"];

  return (
    <Navbar shouldHideOnScroll maxWidth="full"  isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="px-4 sm:px-10 py-6">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <p className="font-bold text-2xl text-gray-800">
            Budaya Adat Dayak Basab
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#" size="lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#sejarah" size="lg">
            Sejarah
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#blog" size="lg">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#lokasi" size="lg">
            Lokasi
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile View */}
      <NavbarContent className="sm:hidden pr-3">
        <NavbarBrand>
          <p className="font-bold text-xl">Budaya Adat Dayak Basab</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
