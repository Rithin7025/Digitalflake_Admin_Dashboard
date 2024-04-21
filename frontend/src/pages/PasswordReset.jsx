import React,{useState} from 'react'
import { Link } from 'react-router-dom';
//




 // YET TO COMPLETE





//

function PasswordReset() {
    const [formError, setFormError] = useState({});
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormError({});
        setFormData({
          ...formData,
          [e.target.id]: [e.target.value],
        });
       
      };
      
      const validateForm = () => {
        const errors = {}
        const MIN_PASSWORD_LENGTH = 8
         // Regular expression patterns for password complexity
    const patterns = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        digit: /\d/,
        specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
      };

      //check for complexity requirements;
    const hasUpperCase = patterns.uppercase.test(formData.password)
    const hasLowerCase = patterns.lowercase.test(formData.password)
    const hasDigit = patterns.digit.test(formData.password)
    const hasSpecialCharacter = patterns.specialChar.test(formData.password)

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

      const handleSubmit = (e) => {
try {
    e.preventDefault();
    setFormError(validateForm(formData));
    if(Object.keys(formError).length === 0){
        // setLoading(true)
        console.log(formError)
    }

} catch (error) {
    setLoading(false)
}
      }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">

      <div className="p-8 space-y-8" >
        <div className='flex flex-col items-center'>
          <p className='text-lg font-semibold text-purple-900'>Reset password </p>
        </div>

        <p className="text-center text-slate-500">password should contain An uppercase, lowercase ,number and a special character</p>
        <form className="space-y-8" action="" >

        <div>
                {/* error message to display if any */}
                <div className="flex justify-between">
                  {!formError.password && (
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter new Password
                    </label>
                  )}
                  {/* display error messages regarding password */}
                  {formError.password && (
                    <p className="text-red-600 text-xs text-right mb-5 ">
                      {formError.password}
                    </p>
                  )}
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-blue-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={handleChange}
                />
              </div>
          <button onClick={handleSubmit} disabled={loading}className="p-3 bg-[#662671] w-full disabled:opacity-75 rounded-lg font-semibold text-white">Request reset link</button>
          <div className="flex items-center justify-center">
            <Link to={'/login'}>
            <button className='text-slate-500 hover:underline font-semibold'>Back to login</button>
            </Link>
          </div>    
        </form>
      </div>
    </div>
  </div>
  )
}

export default PasswordReset