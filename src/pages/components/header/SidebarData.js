import React from "react";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

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
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Get All',
              path: '/employee/all',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Get by Id",
              path: '/employee/:id',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Update",
              path: '/employee/update',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Delete',
              path: '/employee/delete',
              icon: <IoIcons.IoIosPaper />
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
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Get All',
              path: '/customer/all',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Get by Id",
              path: '/customer/:id',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Update",
              path: '/customer/update',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Delete',
              path: '/customer/delete',
              icon: <IoIcons.IoIosPaper />
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
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Get All',
              path: '/vehicle/all',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Get by Id",
              path: '/vehicle/:id',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Update",
              path: '/vehicle/update',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Delete',
              path: '/vehicle/delete',
              icon: <IoIcons.IoIosPaper />
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
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Get All',
              path: '/repair/all',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Get by Id",
              path: '/repair/:id',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: "Update",
              path: '/repair/update',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Delete',
              path: '/repair/delete',
              icon: <IoIcons.IoIosPaper />
            }
        ]
    },
];
