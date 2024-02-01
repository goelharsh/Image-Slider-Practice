import React, { useState } from 'react'
import {data} from "./data"
const ImageSlider = () => {
    const [image,setImage] = useState(0)

    function handlePrevClick(){
        if(image===0){
            setImage(data.length-1)
        }else{
            setImage(image-1)
        }
    }
    function handleNextClick(){
        setImage((image+1)%data.length)
    }
  return (
    <div className='flex '>
        <button className='p-4 m-4 font-bold ' onClick={handlePrevClick}>Previous</button>
        {/* <img src={data[image]} className='w-[400px] h-[300px]' alt='imageSlider'/> */}
        {
            data.map((img,index)=>(
                <img src={img} key={index} className={'w-[400px] h-[300px] ' + (image=== index ? "block" : "hidden")} alt="image"/>
            ))
        }
        <button className='p-4 m-4 font-bold ' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default ImageSlider