import { Icon } from "@iconify/react";
import React from "react";

export default function NavLogo() {
  return (
    <div className="flex gap-4 ">
      <Icon
        className="text-primary"
        icon="line-md:buy-me-a-coffee-filled"
        style={{ fontSize: "30px" }}
      />
      <p className="hidden lg:!block font-extrabold md:text-xl">Coffee Shop</p>
    </div>
  );
}
