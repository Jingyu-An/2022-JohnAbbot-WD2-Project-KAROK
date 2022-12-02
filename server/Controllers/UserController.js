import UserModel from "../Models/userModel.js";

export const getUser  = async (req, res)=>{
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        if(user){
            //This statement only shows the data without the password for security reasons.
            const{password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails)
        }else{
            res.status(404).json("User not founded")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {
        try {
            const user = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied! you can only update your own profile");
    }
};