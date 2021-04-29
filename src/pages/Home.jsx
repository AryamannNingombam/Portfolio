import React,{useState,useEffect} from 'react'
import { Introduction } from '../components/home/Introduction';
import { HomePreLoader } from '../components/home/PreLoader';
import { Projects } from '../components/home/Projects';
import { Skills } from '../components/home/Skills';
import {LineAnimation} from '../components/shared/LineAnimation'; 
import homepagePreloader from '../images/Pre-loader-SVG.svg';
function Home({setPre}){
    const [displayPreLoader,setDisplayPreLoader] = useState(true);

    const switchDisplay = ()=>{
        setDisplayPreLoader(!displayPreLoader);
        setPre(!displayPreLoader);

    };
    

    useEffect(()=>{
    setTimeout(switchDisplay,2800);
        
    },[])

    const returnPreLoader = ()=>(<HomePreLoader  logo={homepagePreloader}/>);

    const returnMainText = () =>(
        <>
        <Introduction/>
        <LineAnimation/>
        <Skills/>
        <LineAnimation/>
        <Projects/>
        <LineAnimation/>
        </>
    )

    return (
       <>
        {displayPreLoader ? returnPreLoader() : returnMainText()}
       </>
    )
}


export default Home;
