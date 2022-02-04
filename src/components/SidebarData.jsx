import React from "react";
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
        subNav: [
            {
                title: 'Foods',
                path: '/home/foods',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Statistics',
                path: '/home/statistics',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },

    {
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },

]