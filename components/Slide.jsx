import styles from "../css/Slide.module.css";
import { useState } from "react";
import React from "react";
import NextImage from "next/image";
import { useTranslation } from 'react-i18next';

  var stopSlider=false;
  let timeout;

const Slide = () => {  
  const { t, i18n} = useTranslation();
  const [index,setIndex]=useState(0); 

  const images=[
    require('../img/slide1.png'),
    require('../img/slide2.png'),
    require('../img/slide3.png'),
    require('../img/slide4.png'),
    require('../img/slide5.png'),
    require('../img/slide6.png'),
    require('../img/slide7.png'),
  ];

  const handleArrow=(direction)=>{
    if(direction==="l"){
        setIndex(index !==0 ? index-1 :6);
        stopSlider=true;
        clearTimeout(timeout.current);
      }
    else if(direction==="r"){
        setIndex(index !==6 ? index+1 :0);
        stopSlider=true;
        clearTimeout(timeout.current);
    }
    else if(!stopSlider){
       setIndex(index !==6 ? index+1 :0);
    }
  }

  timeout=setTimeout(handleArrow,3500,"s");

  return (
    <div className={styles.container}>
        <div className={styles.titleDiv}>
          <h1 className={styles.title}>{t('CompanyTitle')}</h1>
        </div>
        <div className={styles.arrowContainer} style={{left:10}} onClick={()=>handleArrow("l")} tabIndex="1">
               <NextImage  src={require('../img/arrowL.png')} alt="" layout="fill" objectFit="contain" loading="lazy" />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img,i)=>(
                    <div className={styles.imgContainer} key={i}>
                           <NextImage src={img}  alt="" layout="fill" objectFit="cover"  loading="lazy"/>
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right:10}} onClick={()=>handleArrow("r")}>
            <NextImage  src={require('../img/arrowR.png')} alt="" layout="fill" objectFit="contain" loading="lazy"/>
        </div>
    </div>
  )
}

export default Slide