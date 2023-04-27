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




// const URL_BASE= 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY= 'c2734c76f55c.8473b1acb2d58697f157'  
const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {
   
   const [characters, setCharacters]= useState([]);
   const [access,setAccess]= useState(false);
   const navigate = useNavigate();
   const location= useLocation();
   
   useEffect(() => {
      !access && navigate('/')
   }, [access])


   // const email= 'jvoe@gmail.com';
   // const password= 'josev14';

   const onClose=(id)=>{
      const filtrado= characters.filter(element=>element.id !==(id))
      setCharacters(filtrado);
   }

   


   

   const onSearch = async(id)=> {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };
         
      } catch (error) {
         alert('¡No hay personajes con este ID o ya se encuentra en Pantalla!');
         
      }
   }


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         alert('Usuario o Password incorrectos');
         
      }
   }



   return (
      <div className='App'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Rick And Morty</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
         </Helmet>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
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