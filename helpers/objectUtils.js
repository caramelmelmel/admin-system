
async function getRegisterViaEmail(email, model) {
    let ExistingEmail;
    try{
        ExistingEmail = await model.findOne({where:{email}})
    }
    catch(err) {
        ExistingEmail = err
    }
    
    return ExistingEmail;
}

function isEmptyEntry(property) {
    return !property || ((typeof property === 'string' && property==='') || (Array.isArray(property)&& property.length===0));
}

/**
 *  Checks for valid email formats
 * @param {string} email 
 * @returns boolean
 * 
 */
function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email)
}

module.exports = {getRegisterViaEmail, isEmptyEntry, isValidEmail};