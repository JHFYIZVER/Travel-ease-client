"use client";
import React from "react";

const Header = () => {
  const token = localStorage.getItem("token");
  return <div>{token}</div>;
};

export default Header;
