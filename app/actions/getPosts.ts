import prisma from '@/app/libs/prismadb'

export interface IPostsParams {
    userId?: string;
    postId?: string;
    
}

export default async function getPosts(
    params: IPostsParams
){
    try{
        
        const { userId,postId} = params;
        let posts
        if(userId && typeof userId  === 'string'){
            let query: any = {};


            

            if(userId){
                query.userId = userId;
            }

            
        
        

            
            posts = await prisma.post.findMany({
                where: query,
                orderBy:{
                    createdAt: 'desc'
                },
                include:{
                    user:true,
                    comments:true,
                    
                }
            })
        }
        else {
            let query: any = {};

            if(postId){
                query.postId = postId;
            }
            posts = await prisma.post.findMany({
                where:query,
                orderBy:{
                    createdAt:'desc'
                },
                include:{
                    user:true,
                    comments:true,
                    
                }
            })
        }
        
       

        return posts;
        
    }catch(error: any){
        throw new Error(error)
    }
}