import styles from "../css/Gallery.module.css";
import NextImage from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t, i18n} = useTranslation();

  const [imgsrc,setImagesrc]=useState(require('../img/gallery/1.png'));
  const [visible,setVisible]=useState('none');

  return (
    <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.showImageFrame} style={{display:visible}}>
              <span className={styles.showImageSpan} onClick={()=>setVisible('none')}>&times;</span>
              <NextImage className={styles.showingImage} src={imgsrc}  alt="" objectFit="contain" loading="lazy"/>
          </div>
          <h1 className={styles.h1Title} style={{margin:'1vw',whiteSpace:'nowrap'}}>{t('ImageGallery')}</h1>
          <div className={styles.galleryDiv}>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/1.png'))}} src={require('../img/gallery/1.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/2.png'))}} src={require('../img/gallery/2.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/3.png'))}} src={require('../img/gallery/3.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/4.png'))}} src={require('../img/gallery/4.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/5.png'))}} src={require('../img/gallery/5.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/6.png'))}} src={require('../img/gallery/6.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/7.png'))}} src={require('../img/gallery/7.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/8.png'))}} src={require('../img/gallery/8.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/9.png'))}} src={require('../img/gallery/9.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/10.png'))}} src={require('../img/gallery/10.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/11.png'))}} src={require('../img/gallery/11.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/12.png'))}} src={require('../img/gallery/12.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/13.png'))}} src={require('../img/gallery/13.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/14.png'))}} src={require('../img/gallery/14.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/15.png'))}} src={require('../img/gallery/15.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/16.png'))}} src={require('../img/gallery/16.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/17.png'))}} src={require('../img/gallery/17.png')}  alt="" objectFit="contain" loading="lazy"/>
                <NextImage className={styles.images} onClick={()=>{setVisible('flex'); setImagesrc(require('../img/gallery/18.png'))}} src={require('../img/gallery/18.png')}  alt="" objectFit="contain" loading="lazy"/>
          </div>
        </div>
    </div>
  )
}

export default Gallery