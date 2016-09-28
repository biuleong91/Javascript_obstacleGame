function initValidation()
{
    // irrelevant code here
    function validate(){
        console.log( "test");
    }

    initValidation.validate = validate;
}

initValidation();
initValidation.validate();
//test hello