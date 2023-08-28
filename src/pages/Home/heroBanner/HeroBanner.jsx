import React ,{useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./style.scss"
import useFetch from "../../../hooks/useFetch"
import Img from '../../../components/lazyladimage/Img'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import {useSelector} from "react-redux"
const HeroBanner = () => {
  const [backdroping,setBackdrop] = useState("");
  const [query,setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home)
  const {data,loading} = useFetch("/movie/upcoming")
  
  useEffect(()=>{
    const bg = url?.backdrop +  data?.results?.[Math.floor(Math.random()* 20)]?.backdrop_path;
    setBackdrop(bg);
  },[data])

  const searchQuery = (e) =>{
    if(e.key === "Enter" && query.length > 0){
        navigate(`/search/${query}`)
    }
  }
  
  return (
    <div className='herobanner'>
       {!loading && <div className="backdrop">
         <Img src={backdroping}/>
       </div>}
       <div className="opacity"></div>
       <ContentWrapper >

       
        <div className="wrapper">
            <div className="bannercontent">
                <span className='title'>Welcome </span> <span className='subtitle'> Millions of mocies,Tv Shows and around the world content .Explore now</span>
                <div className="searchInput">
                    <input type="text"  placeholder='Search for movies ....' 
                    onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQuery }/>
                    <button>Search</button>
                </div>
            </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner