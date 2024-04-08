function password(length) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()-_+=';
    const numbers = '0123456789';

    let password = '';

    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    const remainingLength = length - 4;

    for (let i = 0; i < remainingLength; i++) {
        const randomType = Math.floor(Math.random() * 4);
        switch (randomType) {
            case 0:
                password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
                break;
            case 1:
                password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
                break;
            case 2:
                password += specialChars[Math.floor(Math.random() * specialChars.length)];
                break;
            case 3:
                password += numbers[Math.floor(Math.random() * numbers.length)];
                break;
        }
    }

    // Shuffle the password characters to make it more secure
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

const generatePassword = async (req, res, next) => {
    try {
        const { length } = req.body;
        console.log(length);
        const newpassword = password(length);
        res.status(200).send(newpassword);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    generatePassword
}; 