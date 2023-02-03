import styles from "../css/About.module.css";
import NextImage from "next/image";
import { useTranslation } from 'react-i18next';
import colors from './Colors';
import { useEffect, useState } from "react";

function About() {  
  const { t, i18n} = useTranslation();
  const [imgWidth,setImgWidth]=useState('50vw');
  
  useEffect(()=>{
    const showUp = ()=>{
      if(parseInt(window.innerWidth)>600){
        setImgWidth('50vw');
      }
      else{
        setImgWidth('90vw');
      }
    };
    showUp();
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.title}>{t('CompanyTitle')}</h1>
            <div className={styles.textDiv} 
                style={{
                    backgroundColor:colors.color_bgTrans,
                    borderColor:colors.color_text,
                    color:colors.color_text,
                    backgroundColor:colors.color_bgTrans
                }}>
                <h1 className={styles.textDivTitles1} style={{color:colors.color_text}}>{t('CompanyTitle')}</h1>
                <h1 className={styles.textDivTitles2} style={{color:'white',fontWeight:'bold'}}>{t('CorrectDecision')}</h1>
            </div>
            
            <div className={styles.handImageDiv}>
                <NextImage  src={require('../img/hand.png')} alt="" loading="lazy" objectFit="contain" style={{height:'auto',width:imgWidth}}/>
            </div>
        </div>

        <div style={{ width: '100%', backgroundColor: colors.color_bg }}>
                <hr style={{ height: '0.1vw', border: 0, backgroundColor: colors.color_text }} />
        </div>

        <div className={styles.aboutDiv}>
           <div className={styles.textDiv2} 
                style={{
                    backgroundColor:colors.color_bgTrans,
                    borderColor:colors.color_text,
                    color:colors.color_text,
                    backgroundColor:colors.color_bgTrans
                }}>
                <h1 className={styles.textDivTitles1} style={{color:colors.color_text}}>{t('CompanyTitle')}</h1>
                <h1 className={styles.textDivTitles3} style={{color:'white'}}> {t('AboutParagraph')}</h1>
            </div>

            <div className={styles.backgroundDiv}>
                 <NextImage src={require('../img/view1.jpg')} alt="" loading="lazy" objectFit="contain" style={{width:'auto',height:'100vh'}}/>
            </div>
        </div>
    </div>
  )
}

export default About