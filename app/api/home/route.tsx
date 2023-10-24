import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json({
        EmbroideryPunching: {
            "EmbroideryPunching1":[
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/1.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/2.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/3.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/4.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/5.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/6.jpeg"
                },
            ],
            "EmbroideryPunching2":[
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/7.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/9.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/10.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/7.jpeg"
                },
                {
                    image:"https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                },
            ],
        }
    });
};