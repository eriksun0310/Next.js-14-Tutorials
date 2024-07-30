import React, { useState } from "react";
import NavSearch from "./nav-search";
import NavLink from "./nav-links";

const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <div>
      <NavLink />
      <NavSearch />
    </div>
  );
};

export default Navbar;
