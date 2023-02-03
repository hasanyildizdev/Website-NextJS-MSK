import styles from "../css/View.module.css";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import colors from './Colors';
import { useTranslation } from 'react-i18next';

function View1() {  
  const { t, i18n} = useTranslation();
  const [left,setLeft]=useState('-1000px');
  
  useEffect(()=>{
    const showUp = ()=>{
      if(parseInt(window.innerWidth)>600){
        if(window.scrollY>parseInt(window.innerHeight)-90){
          setLeft('-0.3vw');
        }
      }
      else{
        if(window.scrollY>parseInt(window.innerHeight)/4){
          setLeft('-0.3vw');
        }
      }
    };
    window.addEventListener('scroll',showUp)
  }, []);

  return (
    <div className={styles.container}>
      
       <NextImage src={require('../img/round1.png')} style={{borderColor:colors.color_text}} className={styles.roundImageDiv}  alt="" loading="lazy" objectFit="contain"/>
        <div className={styles.textCartDiv} 
          style={{
              transition:'2s',
              left:left,
              borderColor:colors.color_text,
              color:colors.color_text,
              backgroundColor:colors.color_bgTrans
              }}> 
          <div className={styles.textCartItems}>
            <h1 className={styles.textCartTitle}>{t('CompanyTitle')}</h1>
          </div>
          <div className={styles.textCartItems}>
            <p className={styles.textCartText} style={{fontWeight:'bold'}}>{t('View1Explanation')}</p>
          </div>
          <div className={styles.textCartItems}>
            <button 
              className={styles.textCartButton}  
              style={{borderWidth:'0.3vw',borderColor:colors.color_text,color:colors.color_text}}>
              <a href="/about" style={{fontWeight:'bolder'}}>{t('About')}</a>
            </button>
          </div>
        </div>

        <div className={styles.bacgroundDiv}>
          <NextImage src={require('../img/view1.jpg')} alt="" loading="lazy" objectFit="contain" style={{width:'auto',height:'100vh'}}/>
        </div>
    </div>
    
  )
}

export default View1