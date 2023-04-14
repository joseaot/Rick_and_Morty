import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';




const URL_BASE= 'https://be-a-rym.up.railway.app/api/character'
const API_KEY= 'c2734c76f55c.8473b1acb2d58697f157'  


function App() {
   
   const [characters, setCharacters]= useState([]);
   const [access,setAccess]= useState(false);
   const navigate = useNavigate();
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const EMAIL= 'jvoe@gmail.com';
   const PASSWORD= 'josev14';

   const onClose=(id)=>{
      const filtrado= characters.filter(element=>element.id !==(id))
      setCharacters(filtrado);
   }

   


   

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name && !characters.find((char)=> char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID o ya se encuentra en Pantalla!');
         }
      });
   }


   const {pathname}= useLocation();


   const login=(userData)=>{
      if(userData.email === EMAIL && userData.password===PASSWORD){
         setAccess(true);
         navigate('/home');
      }else{
         alert('Credenciales Incorrectas');
      };

   };



   return (
      <div className='App'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Rick And Morty</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
         </Helmet>
         {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
      
   );
}

export default App;