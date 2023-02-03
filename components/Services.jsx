import styles from "../css/Services.module.css";
import NextImage from "next/image";;
import colors from './Colors';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>

      <div className={styles.items}>
        <div className={styles.aboutDiv}>
          <div className={styles.textDiv}
            style={{
              backgroundColor: colors.color_bgTrans,
              borderColor: colors.color_text,
              color: colors.color_text,
              backgroundColor: colors.color_bgTrans
            }}>
            <h1 className={styles.h1Title} style={{ color: colors.color_text,fontWeight:'bolder'}}>{t('CompanyTitle')}</h1>
            <h1 className={styles.h1Text} style={{ color: 'white', textAlign: 'justify' }}> {t('ServiceDescription')}</h1>
          </div>

          <div className={styles.backgroundDiv}>
                 <NextImage src={require('../img/view3.jpg')} alt="" loading="lazy" objectFit="contain" style={{width:'auto',height:'100vh'}}/>
          </div>
        </div>

          <div style={{ width: '100%', backgroundColor: colors.color_bg }}>
              <hr style={{ height: '0.1vw', border: 0, backgroundColor: colors.color_text }} />
          </div>
      </div>

      <div className={styles.items}>
        <div className={styles.servicesFrame}>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>{t('Seedling')}</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} src={require('../img/icons/seed.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('IrrigationSystems')}<br />
                - {t('FertilizationSystems')}<br />
                - {t('BoomSystems')}
              </h2>
            </div>
          </div>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>FAN</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} src={require('../img/icons/fan.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('Circulation')}<br />
                - {t('Ventilation')}
              </h2>
            </div>
          </div>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>{t('Fogging')}</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} src={require('../img/icons/cloud.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('Humudity')}<br />
                - {t('Cooling')}<br />
                - {t('Outdoor')}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.items}>
      <div className={styles.servicesFrame}>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>{t('Consultancy')}</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} src={require('../img/icons/secretary.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('ProductionConsultancy')}<br />
                - {t('GreenConsultancy')}<br/>
                - {t('SoillessConsultancy')}<br />
                - {t('AgriculturalConsultancy')}
              </h2>
            </div>
          </div>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>{t('Projects')}</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} style={{height:'auto'}} src={require('../img/icons/project.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('GreenhouseProjects')}<br />
                - {t('GreenhouseSoilless')}<br />
                - {t('FruitGarden')}<br/>
                - {t('Turnkey')}
              </h2>
            </div>
          </div>
          <div className={styles.serviceCard} style={{ borderColor: colors.color_text, background: colors.color_bgTrans }}>
            <div className={styles.cardSectionsTitle}>
              <h1 style={{ color: colors.color_text }}>{t('Electricity')}</h1>
            </div>
            <div className={styles.cardSections}>
              <NextImage className={styles.cardImage} src={require('../img/icons/electiricity.png')} alt="" />
            </div>
            <div className={styles.cardSections}>
              <h2 style={{color: colors.color_text }}>
                - {t('AutomationSystems')}<br />
                - {t('ProjectElectrification')}<br />
                - {t('Breakdown')}
              </h2>
            </div>
          </div>
        </div>
      </div>
    
    </div>

 
  )
}

export default Services