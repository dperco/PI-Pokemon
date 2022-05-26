import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landinpage.css';


export default function LandingPage(){

    return (
            <div >
                <h2 > Bienvenidos a  Pokemon </h2>
                <br></br>
                      <p>Info  de los Pokemon </p>
                      <br></br>
                      <div >
                          <Link to ='/home'>
                          <button > Pagina Principal </button> 
                          </Link>
                          
                      </div>
                      <br></br>
                  <h5>by Daniel Perco</h5>
            </div>

        
    );
         
};