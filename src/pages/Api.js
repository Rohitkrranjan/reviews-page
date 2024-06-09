import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Api.css'
import slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'


function Api() {
    const [myData , setMyData] = useState([]);

    const settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1
    }

    useEffect(()=>{
        axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1").then((res)=>{
            setMyData(res.data.data);
            console.log(res.data);
        })
    },[])
  return (
   <div className='header'>
      <div className='container'>
        <Slider {...settings}>
        {Array.isArray(myData) && myData?.map((post)=>{
            const{ID,Name,Company,Reviews,Platform} = post;
            return(
                <div className='content'>
                    <div className='inner-content'>
                    <p style={{fontSize:'15px',fontWeight:'700'}}>{Reviews}</p>
                    <p  style={{fontSize:'15px', fontWeight:'800',color:'blue'}}>{Name}</p>
                     <p>{Platform}</p>
                    </div>
                    
                </div>
            )

        })}

</Slider>
          
      </div>
   </div>
    
  )
}

export default Api
