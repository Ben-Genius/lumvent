import { ReactNode } from "react";
import { IoChatbubble,IoGridOutline,IoCompass,IoPeople, } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";


export interface IOsList1 {
    title: string;
    para :string;
}

export interface IOsList2 {
    title: string;
    para :string;
    icon: any
}


export const iosAppList1: IOsList1[] = [
    {
        title: 'Create events',
        para: 'Create events right from your phone, and easily access events you are hosting or going to.'
        
    },
    {
        title: 'Send SMS invites',
        para: 'Invite people in your phone book and past guests effortlessly via text message or email.        '
        
    },
    {
        title: 'Notifications',
        para: 'Keep up with your chats, event invites, and event updates.'
        
    },
]

export const iosAppList2: IOsList2[] = [
    {
        'title': 'Chat with (new) friends',
        'para': 'Attend events, make friends, and chat with them right from the app.        ',
        'icon': IoChatbubble
    },
    {
        'title': 'Check in guests',
        'para': 'Check in guests using a QR code or from a list. Apple Wallet compatible.        ',
        'icon':IoGridOutline
    },

    {
        'title': 'Explore your city',
        'para': 'Discover featured calendars and popular events in your city.        ',
        'icon':IoCompass,
    },
    {
        'title': 'Event feed',
        'para': "Easily see what events you’re going to and what's happening around you.",
        'icon':IoPeople,
    },
    {
        'title': 'Guest list',
        'para': "See who’s coming to an event before you register",
        'icon':MdOutlineLightMode ,
    },
    {
        'title': 'Weather forecast',
        'para': 'Easily check the weather and pack an umbrella if needed',
        'icon':BsFillLightningFill,
    },
]
