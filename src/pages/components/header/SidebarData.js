import React from "react";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <GiIcons.GiHomeGarage />,
    },
    {
        title: "Employees",
        icon: <BsIcons.BsPersonLinesFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: "Create",
              path: '/employee/create',
              icon: <IoIcons.IoMdCreate />
            },
            {
              title: 'Get All',
              path: '/employee/all',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Get by Id",
              path: '/employee/:id',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Update",
              path: '/employee/update',
              icon: <MdIcons.MdUpdate />
            },
            {
              title: 'Delete',
              path: '/employee/delete',
              icon: <MdIcons.MdDelete />
            }
        ]
    },
    {
        title: "Customers",
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: "Create",
              path: '/customer/create',
              icon: <IoIcons.IoMdCreate />
            },
            {
              title: 'Get All',
              path: '/customer/all',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Get by Id",
              path: '/customer/:id',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Update",
              path: '/customer/update',
              icon: <MdIcons.MdUpdate />
            },
            {
              title: 'Delete',
              path: '/customer/delete',
              icon: <MdIcons.MdDelete />
            }
        ]
    },
    {
        title: "Vehicles",
        icon: <BiIcons.BiCar />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: "Create",
              path: '/vehicle/create',
              icon: <IoIcons.IoMdCreate />
            },
            {
              title: 'Get All',
              path: '/vehicle/all',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Get by Id",
              path: '/vehicle/:id',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Update",
              path: '/vehicle/update',
              icon: <MdIcons.MdUpdate />
            },
            {
              title: 'Delete',
              path: '/vehicle/delete',
              icon: <MdIcons.MdDelete />
            }
        ]
    },
    {
        title: "Repairs",
        icon: <GiIcons.GiAutoRepair />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: "Create",
              path: '/repair/create',
              icon: <IoIcons.IoMdCreate />
            },
            {
              title: 'Get All',
              path: '/repair/all',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Get by Id",
              path: '/repair/:id',
              icon: <BiIcons.BiFileFind />
            },
            {
              title: "Update",
              path: '/repair/update',
              icon: <MdIcons.MdUpdate />
            },
            {
              title: 'Delete',
              path: '/repair/delete',
              icon: <MdIcons.MdDelete />
            }
        ]
    },
];
