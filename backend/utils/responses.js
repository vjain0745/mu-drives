const responseMessages = {
    success: "Success",
    verificationTokenNotFoundMessage: "Authentication Token Is Missing",
    verificationErrorMessage: "Oops! Authentication Failed, Please Provide Valid Credentials",
    adminSave : "Admin succcessfully Saved",
    loggedIn: "Admin succcessfully Logged In !!",
    dataNotSaved: "Oops! Something went wrong",
    UserNotExist: "User doesn't exist",
    UserAlreadyExist: 'User already exist!',
    Nowards : "Np Wards Found",
    wardSave : "Ward succcessfully Saved",
    wardById : "Ward succcessfully Fetched",
    allWards: "All Wards succcessfully Fetched"
};

/**
 * This is a generic function that handles errors for the API's
 */
function errorHandler(res, err) {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
}

/**
 * This is a generic function that handles success responses for the API's
 */
function successHandler(res, successMsg, successData) {
    return res.status(200).json({
        success: true,
        message: successMsg,
        data: successData,
    });
}


module.exports = { successHandler, errorHandler, responseMessages };
