import React from "react";
import { cn } from "../../../lib/utils";
import { NavLink } from "react-router";

const CategoryMenu = ({ title, items }) => {
  return (
    <div className="flex w-full flex-col justify-center items-start gap-2.5">
      <h1 className="font-semibold">{title}</h1>
      <div className="w-full rounded-full h-0.5 bg-[#e2e2e2]" />
      {items.map((item) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            cn([isActive ? "text-skyblue" : "text-[#999999]", "font-medium"])
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryMenu;
