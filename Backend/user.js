const UserSchema = require("./schema"); 

exports.create = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !name || !password) {
            return res.status(400).json({ message: "Enter name and email and password" });
        }


        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already used" });
        }

        
        const newUser = new UserSchema({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

exports.read = async (req, res) => {
    try {
        const { email } = req.params; 

        if (email) {
            const user = await UserSchema.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }
            return res.status(200).json(user);
        }

        const users = await UserSchema.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};



exports.update = async (req, res) => {
    try {
        const { email } = req.params;
        const { name } = req.body;


        const updatedUser = await UserSchema.findOneAndUpdate(
            { email },
            { name: name || undefined},
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

exports.delete = async (req, res) => {
    try {
        const { email } = req.params;
        const deletedUser = await UserSchema.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
