const asyncHandler = (fn)=>{

    Promise.resolve(fn(req, res, next)).
    catch((err) => next(err))
        
}

export{asyncHandler}


// const asyncHandler = (fn)=>{()=>{

// }}
// Both are same

                    // Try Catch Syntax
// const asyncHandler = (fn)=> async(req , res , next)=>{

//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }

// }