import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

const email = 'makarena@gmail.com';
const password = '123mak';

function App() {
   const location = useLocation();

   const [characters, setCharacters] = useState([]);

   const[access, setAccess] = useState(false);
   const navigate = useNavigate();

   const login = (userData)=>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data])               
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess=
            {setAccess}/>
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            
            <Route path= "/home" element=
            {<Cards characters = {characters} 
            onClose={onClose}/> } />
            
            <Route path= "/about" element={<About/>}/>
            
            <Route path= "/detail/:id" element={<Detail/>}/>
            

         
         </Routes>
      </div>
   );
}

export default App;
