import React, { useEffect, useState } from 'react'
import styles from '../css/Navbar.module.css';
import NextImage from "next/image";
import colors from './Colors';
import { useTranslation } from 'react-i18next';
import AsyncLocalStorage from '@createnextapp/async-local-storage'

const Navbar = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const storeData = async (lang) => {
    try {
      await AsyncLocalStorage.setItem('Language', lang);
    } catch(e) {
      console.log(e);
    }
  }

  const readData = async () => {
    let data
    try {
      data = await AsyncLocalStorage.getItem('Language');
    } catch(e) {
      console.log(e);
    }
    handleClick(data);
  }

  const [height, setHeight] = useState('9vh');
  const [imageHeight, setImageHeight] = useState('9vh');

  useEffect(() => {
    readData()
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setHeight('6vh');
        setImageHeight('6vh');
      }
      else {
        setHeight('9vh');
        setImageHeight('9vh');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className={styles.container} style={{ height: height, backgroundColor: colors.color_bgTrans, color: colors.color_text }} >
      <div className={styles.containerItems}>
        <div className={styles.logoDiv}>
          <a href="/">
            <NextImage
              style={{ maxHeight: imageHeight, width: 'auto' }}
              className={styles.logoImage}
              src={require('../img/logo.png')}
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className={styles.containerItems}>
        <div className={styles.divNavList}>
          <div className={styles.menuDiv} tabIndex="1">
             <NextImage className={styles.menuImage} src={require('../img/menu.png')} alt="" loading='lazy' />
          </div>
          <ul className={styles.navList}>
            <li className={styles.navListItem}><a href='/'>{t('Home')}</a></li>
            <li className={styles.navListItem}><a href='/about'>{t('About')}</a></li>
            <li className={styles.navListItem}><a href='/services'>{t('Services')}</a></li>
            <li className={styles.navListItem}><a href='/gallery'>{t('Gallery')}</a></li>
            <li className={styles.navListItem}><a href='/contact'>{t('Contact')}</a></li>
          </ul>
        </div>
      </div>

        <div className={styles.logoDiv2}>
          <a href="/">
            <NextImage
              style={{ maxHeight: imageHeight, width: 'auto' }}
              className={styles.logoImage}
              src={require('../img/logo.png')}
              alt=""
              loading="lazy"
            />
          </a>
        </div>

      <div className={styles.containerItems}>
        <NextImage
          tabIndex="1"
          className={styles.turkish}
          src={require('../img/l_tr.png')}
          alt=""
          loading="lazy"
          onClick={() => { handleClick('tr'); storeData('tr');}}
        />
        <NextImage
          tabIndex="1"
          className={styles.english}
          src={require('../img/l_eng.png')}
          alt=""
          loading="lazy"
          onClick={() => { handleClick('en'); storeData('en');}}
        />
      </div>
    </div>
  )
}

export default Navbar