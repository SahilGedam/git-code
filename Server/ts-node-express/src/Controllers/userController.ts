import User from "../Models/userModel";
export const getUsers = async (req: any, res: any)=>{
    try {
     User.read(function(user:any){
        if (user) {
            res.json({user});
        }
     })
    } catch (error) {
    console.log(error);
    res.status(500).json({
        message : error
    })
    
    }
}