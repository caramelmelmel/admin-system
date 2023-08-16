
async function EmailExists(email, model) {
    const ExistingEmail = await model.findOne({where:{email}});
    return ExistingEmail;
}

function isEmptyEntry(property) {
    console.log( !property || (typeof property === 'string' && property===''))
    return !property || (typeof property === 'string' && property==='');
}


/**
 *  Checks for valid email formats
 * @param {string} email 
 * @returns boolean
 * 
 */
async function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email)
}

module.exports = {EmailExists, isEmptyEntry, isValidEmail};