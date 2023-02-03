import React from 'react'
import styles from '../css/Footer.module.css';
import NextImage from "next/image";
import colors from './Colors';
import { useTranslation } from 'react-i18next';

const Footer=()=>{
  const { t, i18n} = useTranslation();

  return (
    <div className={styles.container} style={{backgroundColor:colors.color_bg,color:colors.color_text}}>
      <div className={styles.items}>
        <div className={styles.topItems}>
          <div className={styles.topBoxesMsk}>
            <h1 className={styles.msk}>MSK</h1>
            <p className={styles.subtitle}>{t('CompanyTitle2')}</p>
            <a className={styles.subtitle} href='/'> www.mskserateknolojileri.com</a>
          </div>
          <div className={styles.topBoxesCoporate}>
            <ul>
              <li className={styles.title}>{t('Corporate')}</li>
              <li className={styles.text}><a href='/contact'>{t('Fee')}</a></li>
              <li className={styles.text}><a href='/contact'>{t('AskUs')}</a></li>
              <li className={styles.text}><a href='/contact'>{t('Contact')}</a></li>
              <li className={styles.text}><a href='/about'>{t('About')}</a></li>
              <li className={styles.text}><a href='/services'>{t('Services')}</a></li>
            </ul>
          </div>
          <div className={styles.topBoxesServices}>
            <ul>
              <li className={styles.title}>{t('Services')}</li>
              <li className={styles.text}><a href='/services'>{t('Greenhouse')}</a></li>
              <li className={styles.text}><a href='/services'>{t('Seedbed')}</a></li>
              <li className={styles.text}><a href='/services'>FAN</a></li>
              <li className={styles.text}><a href='/services'>{t('Fogging')}</a></li>
              <li className={styles.text}><a href='/services'>PANEL</a></li>
            </ul>
          </div>
          <div className={styles.topBoxesContact}>
            <ul>
              <li className={styles.title}>{t('Contact')}</li>
              <li className={styles.text}>TEL: +90 245 426 2244</li>
              <li className={styles.text}>MAIL: info@mskserateknolojileri.com</li>
              <li className={styles.text}>{t('Address')}:Macun Mah. İsmail Organ Cad.<br/>  No:3-1/4<br/> Antalya / TÜRKİYE</li>
            </ul>
          </div>

        </div>
      </div>

      <div style={{ flex: 1, width:'75%'}}>
        <hr style={{height:'0.1vw',border:0,backgroundColor:colors.color_text}}/>
      </div>

      <div className={styles.items} style={{flex:1,display:'flex',padding:'1vw 0'}}>
        <div className={styles.divSocialMediaLinks}>
          <div className={styles.social}>
            <NextImage className={styles.linkImage} src={require("../img/face.png")} alt="" />
            <NextImage className={styles.linkImage} src={require("../img/insta.png")} alt="" />
            <NextImage className={styles.linkImage} src={require("../img/twit.png")} alt="" />
          </div>
          <div className={styles.creator}>
            <p> ©Copyright 2022 All Rights Reserved.</p>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://www.iyiapp.com" 
              style={{fontWeight:'bold'}}>
              www.iyiapp.com Created By HASAN YILDIZ
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer