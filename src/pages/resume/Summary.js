import React, { useState } from 'react'

import './summary.css'
import { Link } from 'react-router-dom';
import useResume from '../../hooks/useResume'
import { Auth } from '../../hooks/utils';

import { Button,Anchor } from '@mantine/core';
import { isAuth } from '../../hooks/auth/Auth';
import PageTitle from '../../components/PageTitle';

export function Summary() {


const {resume} = useResume()
const isAuth = Auth.isAuth()
const {data} = Auth.getAuthenticatedUser()
const [showText,setshowText] =useState(false)
const resumeData = resume?.data?.filter((temp) => temp.userId === data.userId)
console.log(resumeData)
const language = resumeData?.[0]!==undefined ? resumeData?.[0].language:null
const hobby =resumeData?.[0]!==undefined ? resumeData?.[0].hobby:null
const skill = resumeData?.[0]!==undefined ? resumeData?.[0].technical_Skil:null
const summary =resumeData?.[0]!==undefined ? resumeData?.[0].summary:null
const filtersummary = ()=>{
   return showText? summary :  summary?.substring(0,100)
}

  return (
    <>
      <PageTitle heading={'Resume Heading'} />
    <div className='summary-container'>
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
          
               <hr />
             <footer>
             <div className="project">
              <h3>Technical Skill</h3>
                { skill?.map((value, index)=> <p>{value}</p> )}
              </div>
              <hr/>
              <div className="project">
              <h3>hobby</h3>
                { hobby?.map((value, index)=> <p>{value}</p> )}
              
              </div>
              <hr/>
              <div className="project">
              <h3>Languages</h3>
                { language?.map((value, index)=> <p>{value}</p> )}
              
              </div>
              <hr /> 
              <div className="social">
               <Link herf={resumeData?.github}>Github</Link>
               <Link herf={resumeData?.linkden}>LinkedIn</Link>
               <Link herf={resumeData?.youtube}>Youtube</Link>
              
             </div> 
               <hr /> 
                 {isAuth && resumeData?.[0]===undefined &&  <Button m='md' 
                 variant="outline"
                 onClick={()=> window.location.replace('/addresume')}
                  >AddNewResume </Button>}
                 {isAuth &&  <Button m='md' variant="outline" >Update</Button>}
            </footer>
          </div>
          
    </>
    
  );
}

 