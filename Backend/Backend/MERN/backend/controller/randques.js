


exports.randques = async(req,res)=>{
    try{
        const {ques} = req.body;
        var opcount = 0;
        const arr = ["+" ,"-","*","/"];
        const exp = ' '+rand() ;
        const arr1 = [];
        while(opcount<2 || Math.random() > 0.3){
            const op = arr[Math.floor(Math.random()*4)];
            exp+=`${op} ${rand()}`;
            opcount++
            
        }

        return res.status(200).json({
            success:true,
            arr1,
        })

    }
    catch(err){

    }

}