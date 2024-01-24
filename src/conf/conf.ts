const conf = 
{
   appwriteUrl : String(process.env.NEXT_PUBLIC_APPWRITE_URL),
   appwriteProjectId : String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),

}

//This is an alternative way of saying in typscript that the url are always there in the env file and we get it write  by the help of this we don't have to put "!" on every other variable..
//We can also use some packages to do that ....
export default conf