import prisma from "@/app/libs/prismadb";


const getUser = async (userId :string) => {


 

  try {
    if(!userId || typeof userId !== 'string' ){
        throw new Error('Invalid ID')
    }
    const existingUser = await prisma?.user.findUnique({
        where:{
            id: userId
        }
    });
    const followersCount = await prisma?.user.count({
        where:{
            followingIds:{
                has: userId
            }
        }
    });


    return {...existingUser,followersCount}
  } catch (error: any) {
    return [];
  }
};

export default getUser;
