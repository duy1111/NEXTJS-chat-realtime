import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST (
    request: Request
){
    try{
        const currentUser = await getCurrentUser();

        if(!currentUser){
            return NextResponse.error()
        }

        const body = await request.json();
        console.log('check body request',body)
        const dataBody:string = body.body
        const {imageSrc}  = body

        if(!dataBody){
            return NextResponse.error()
        }

        const post = await prisma.post.create({
            data:{
                body:dataBody,
                userId: currentUser?.id,
                imageSrc,

            }
        });
        return NextResponse.json(post)
    }catch(error){
        console.log(error)
        return NextResponse.error()
    }
}