const validation=(userData)=>{
// Username
    const errors={};

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        errors.email= 'El email ingresado no es valido';
    } 
    
    if(!userData.email){
        errors.email= 'Debe ingresar un email';
    }

    if(userData.email.length>35){
        errors.email= 'El email no debe superar los 35 caracteres';
    }



    if(userData.password.length<6 || userData.password.length>10){
        errors.password= 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
    };
    
    if(!/\d/.test(userData.password)){
        errors.password= 'La contraseña tiene que tener al menos un número.'
    };


    return errors;


    // if(!userData.email) setErrors({...errors, email:'Por favor complete este campo'});

    // else if(userData.email.length > 35 ) setErrors({...errors, email:'No puede superar los 35 caracteres'});

    // else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
    //     setErrors({...errors, email:'Email invalido'});
    // }else{
    //     setErrors({...errors, email:''});
    // };


// Password
    // if(userData.password.length<6 || userData.password.length>10) {
    //     setErrors({...errors, password:'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'});

    // }else if(!/\d/.test(userData.password)){
    //     setErrors({...errors, password:'la contraseña tiene que tener al menos un número.'});
    // }else{
    //     setErrors({...errors, password:''});
    // };

    

};





export default validation;