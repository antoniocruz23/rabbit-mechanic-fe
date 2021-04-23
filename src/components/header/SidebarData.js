import React from "react";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: "Employees",
        path: "/main",
        icon: <BsIcons.BsPersonLinesFill />,
        cName: "nav-text"
    },
    {
        title: "Customers",
        path: "/main",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Vehicles",
        path: "/main",
        icon: <BiIcons.BiCar />,
        cName: "nav-text"
    },
    {
        title: "Repairs",
        path: "/main",
        icon: <GiIcons.GiAutoRepair />,
        cName: "nav-text"
    },
];
