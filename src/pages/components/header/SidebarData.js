import React from "react";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <GiIcons.GiHomeGarage />,
        cName: "nav-text"
    },
    {
        title: "Employees",
        path: "/employee",
        icon: <BsIcons.BsPersonLinesFill />,
        cName: "nav-text"
    },
    {
        title: "Customers",
        path: "/customer",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Vehicles",
        path: "/vehicle",
        icon: <BiIcons.BiCar />,
        cName: "nav-text"
    },
    {
        title: "Repairs",
        path: "/repair",
        icon: <GiIcons.GiAutoRepair />,
        cName: "nav-text"
    },
];
