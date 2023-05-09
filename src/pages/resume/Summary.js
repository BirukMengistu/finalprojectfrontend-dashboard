import React, { useState } from 'react'

import './summary.css'
import { Link } from 'react-router-dom';
import useResume from '../../hooks/useResume'
import { Auth } from '../../hooks/utils';

import { Button,Anchor } from '@mantine/core';
import { isAuth } from '../../hooks/auth/Auth';

export function Summary() {


const {resume} = useResume()
const isAuth = Auth.isAuth()
const {data} = Auth.getAuthenticatedUser()
const [showText,setshowText] =useState(false)
const resumeData = resume?.data?.filter((temp) => temp.userID === data.userID)
const language = resumeData?.[0].hobby
const skill = resumeData?.[0].technical_Skil
const summary = resumeData?.[0].summary
const filtersummary = ()=>{
   return showText? summary :  summary?.substring(0,100)
}
console.log("langauge", language)
  return (
    
    
    <div className='login-container'>
      <div className="profile-img"></div>
      <h1>
              Summary
            </h1>
             <div className="description">
             
              
              { filtersummary()}
           
              <Anchor onClick={()=> setshowText(!showText)}>
                Read +
              </Anchor>
            </div> 
            <div className="social">
               <Link herf={resumeData?.github}>Github</Link>
               <Link herf={resumeData?.linkden}>LinkedIn</Link>
               <Link herf={resumeData?.youtube}>Youtube</Link>
              
             </div>
               
             <footer>
             <div className="project">
              <h3>Technical Skill</h3>
                { skill?.map((value, index)=> <p>{value}</p> )}
              </div>
              <div className="project">
              <h3>hobby</h3>
                { language?.map((value, index)=> <p>{value}</p> )}
              
              </div>
                  
                 {isAuth &&  <Button m='md' variant="outline" >Update</Button>}
            </footer>
          </div>
          
  );
}

 