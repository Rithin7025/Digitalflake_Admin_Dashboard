const errorHandler = (err,req,res,next) => {
    console.log('middleware for error handling',err);
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || "Internal server error";
    res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage
    })
}

export default errorHandler