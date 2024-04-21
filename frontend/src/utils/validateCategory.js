export const validateCategory = (category) => {
    const errors = {}
       console.log(errors)
    if(!category.categoryName.trim()){
        errors.categoryName = 'Add category to continue'
    }
    if(!category.description.trim()){
        errors.description = 'Add description to continue'
    }
    console.log(errors)
    return errors
}

