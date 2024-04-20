export const validateForm = (formData) => {
    const errors = {}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
    
    // Regular expression patterns for password complexity
    const patterns = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        digit: /\d/,
        specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
      };
      const MIN_PASSWORD_LENGTH = 8

      // Minimum length for the password
//check for complexity requirements;
    const hasUpperCase = patterns.uppercase.test(formData.password)
    const hasLowerCase = patterns.lowercase.test(formData.password)
    const hasDigit = patterns.digit.test(formData.password)
    const hasSpecialCharacter = patterns.specialChar.test(formData.password)

    //to check if the email is present in the form or valid mail
    if (!formData.email) {
        errors.email = "Email required";
        console.log(formData.password)
        return errors
      }else if(!regex.test(formData.email)){
        errors.email = "Please enter a valid email";
        return errors
      }
      console.log(formData.password[0].length)

      if(!formData?.password){
console.log('entered')
        errors.password = "password required"
        return errors
      }else if(formData.password[0].length < MIN_PASSWORD_LENGTH){
        errors.password = "password minimum 8 characters"
        return errors
      }else if((!hasLowerCase || !hasUpperCase || !hasDigit || !hasSpecialCharacter)){
         errors.password = "Password needs uppercase, lowercase, number, and special character"
         return errors
      }
      return errors ; 
}