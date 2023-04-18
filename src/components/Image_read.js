import React, { memo, useEffect, useState } from 'react';

const Image_read = (props) => {
    const [img,setimg]=useState(null)
    useEffect(()=>{
        const fr=new FileReader();
       fr.readAsDataURL(props.value);
       fr.onloadend=()=>{
            setimg(fr.result); 
            // console.log(props);
            props.callbck(fr.result);        
    } 
    },[props.value])
    return (
        <div>
            {/* <img src={img} /> */}
        </div>
    );
};

export default memo(Image_read);