import { NextRequest, NextResponse } from "next/server";
const Navber = [
    {
        label:"Home",
        link:"/"
    },
    {
        label:"About",
        link:"/about"
    },
    {
        label:"Services",
        link:"",
        childrens:[
            {
                label:"Web Designing",
                link:"/web-designing"
            },
            {
                label:"Web Development",
                link:"/web-development"
            },
            {
                label:"Web Hosting",
                link:"/web-hosting"
            },
            {
                label:"Logo Designing",
                link:"/logo-designing"
            },
            {
                label:"Graphic Designing",
                link:"/graphic-designing"
            },
            {
                label:"Security System",
                link:"/security-system"
            },
            {
                label:"Domain Registration",
                link:"/domain-registration"
            },
            {
                label:"Marketing 360",
                link:"/marketing360"
            },
            {
                label:"Video Animation",
                link:"/video-animation"
            },
        ]
    },
    {
        label:"Contact Us",
        link:"/contact"
    },
    {
        label:"Portfolio",
        link:"/portfolio"
    },
    {
        label:"RATING & REVIEWS",
        link:"/rating-and-reviews"
    },

]
export function GET(request: NextRequest) {
    return NextResponse.json({
        header: Navber
    });
};