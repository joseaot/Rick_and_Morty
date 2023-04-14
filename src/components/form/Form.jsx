import { useState } from "react";
import validation from "./Validation";
import style from './form.module.css'

const Form = ({login})=>{


  const [errors, setErrors]= useState({});



  const [userData, setUserData]= useState({
    email:'',
    password:''
  });

  const handleChange=(event)=>{
    const property= event.target.name;
    const value= event.target.value;

    setUserData({...userData, [property]:value});
    setErrors(validation({...userData, [property]:value}));
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handleSubmit} className={style.contenedor}>
        <h1 className={style.titulo} >Ingresa tus Datos</h1>
      <div>
        <label htmlFor="email" className={style.subtitulos1}> Email:</label>
        <input type="text" name="email" id="" placeholder="Tu Email" value={userData.email} onChange={handleChange} className={style.input}/>
        <p className={style.errores}>{errors.email}</p>

      </div>

      <div>
        <label htmlFor="password" className={style.subtitulos2}> Password:</label>
        <input type="password" name="password" placeholder="Tu Password" id=""  value={userData.password} onChange={handleChange} className={style.input}/>
        <p className={style.errores}>{errors.password}</p>

      </div>

      <button className={style.boton}>Submit</button>
    </form>

  );
}

export default Form;