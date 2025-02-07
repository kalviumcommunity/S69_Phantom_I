const item = []

exports.create = (req,res)=>{
    const id = Date.now()
    const {name,email} = req.body
    if (!email || !name){
        return res.send("Enter name and email")
    }
    for(let i=0;i<item.length;i++){
        if(email==item[i].email){
            return res.send("Email already used")
        }
    }
    item.push({id,name,email})
    res.status(201).json({id,name,email})
}

exports.read = (req,res)=>{
    if(item){
        res.status(200).json(item)
    }
}

exports.update = (req,res)=>{
    const {email} = req.query
    const {name,em} = req.body
    const x = item.find((y)=>{
        return y.email === email
        
    })
    if(x){
        x.name =   name || x.name
        x.email =  em || x.email
        return res.status(200).json(x)
    }else{
        return res.status(404).json({message: "Item not found."})
    }
   
}

exports.delete = (req,res)=>{
    const {email} = req.query
    const x = item.findIndex((y)=>{
        return y.email === email
        
    })
    if(x!==-1){
        item.splice(x,1)
        return res.status(200).json("Deleted")
    }else{
        return res.status(404).json({message: "Item not found."})
    }
}