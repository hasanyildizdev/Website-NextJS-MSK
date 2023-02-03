import styles from "../css/Contact.module.css";
import NextImage from "next/image";
import Button from "../components/Button";
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import colors from './Colors';

function Contact() {
    const { t, i18n } = useTranslation();

    const [form, setForm] = useState('')
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()

        if (inputs.name && inputs.email && inputs.subject && inputs.message) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch("https://msksera.iyiapp.com/api/mail", {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                }).then(function(response){})

                const { error } = await res.json()

                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }

                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setInputs({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        }
    }

    return (
        <div className={styles.container}>
            <Button />

            <div className={styles.intro}>
                <div className={styles.textDiv}
                    style={{
                        backgroundColor: colors.color_bgTrans,
                        borderColor: colors.color_text,
                        color: colors.color_text,
                        backgroundColor: colors.color_bgTrans
                    }}>
                    <h1 className={styles.h1Titles} style={{ color: colors.color_text}}>{t('CompanyTitle')}</h1>
                    <h1 className={styles.h1Titles} style={{ color: 'white' }}>{t('aBetterFuture')}</h1>
                </div>

                <div className={styles.backgroundDiv}>
                    <NextImage src={require('../img/view4.jpg')} alt="" loading="lazy" objectFit="contain" style={{ width: 'auto', height: '100vh' }} />
                </div>
            </div>

            <div style={{padding:0,margin:0,height:'0.3vw', width: '100%', backgroundColor: colors.color_bg }}>
                <hr style={{ height: '0.3vw',  border: 0, backgroundColor: colors.color_text }} />
            </div>

            <div className={styles.contactCarts}>
                <div className={styles.items} style={{
                    backgroundColor: colors.color_bg,
                    color: colors.color_text,
                    border: '0.3vw  solid',
                    borderColor: colors.color_text,
                }}>
                    <div className={styles.socialMediaLinks}>
                        <NextImage alt="" className={styles.linkImage} src={require("../img/i_facebook.png")} />
                        <NextImage alt="" className={styles.linkImage} src={require("../img/i_instagram.png")} />
                        <NextImage alt="" className={styles.linkImage} src={require("../img/i_twitter.png")} />
                        <NextImage alt="" className={styles.linkImage} src={require("../img/i_youtube.png")} />
                        <NextImage alt="" className={styles.linkImage} src={require("../img/i_telegram.png")} />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.mailUs}
                        style={{
                            backgroundColor: colors.color_bgTrans,
                            color: colors.color_text
                        }}>
                        <div className={styles.mailUsFrame} style={{ border: '0.3vw solid', borderColor: colors.color_text }}>
                            <h2 
                                className={styles.frameTitles}
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>
                                {t('MailUs')}
                            </h2>
                            <div className={styles.mailUsInputs}>
                                <form onSubmit={(e) => onSubmitForm(e)}>
                                    <input
                                        required
                                        id='name'
                                        type='text'
                                        value={inputs.name}
                                        onChange={handleChange}
                                        placeholder={t('NameSirname')}
                                        style={{ color: 'black'}}
                                        className={styles.inputTexts}
                                    />
                                    <input
                                        required
                                        id='email'
                                        type='email'
                                        value={inputs.email}
                                        onChange={handleChange}
                                        placeholder={t('MailAddress')}
                                        style={{ color: 'black'}}
                                        className={styles.inputTexts}
                                    />
                                    <input
                                        required
                                        id='subject'
                                        type='text'
                                        value={inputs.subject}
                                        onChange={handleChange}
                                        placeholder={t('Subject')}
                                        style={{ color: 'black' }}
                                        className={styles.inputTexts}
                                    />
                                    <textarea
                                        required
                                        id='message'
                                        type='text'
                                        value={inputs.message}
                                        onChange={handleChange}
                                        rows="8"
                                        placeholder={t('Message')}
                                        style={{ color: 'black'}}
                                        className={styles.inputTextArea}
                                    />
                                    <div className={styles.divButton}>
                                        <button
                                            disabled={!inputs.name || !inputs.email || !inputs.subject || !inputs.message}
                                            type="submit"
                                            className={styles.inputTexts}
                                            style={{
                                                padding: '1vw 2vw',
                                                cursor: 'pointer',
                                                backgroundColor: colors.color_bgTrans,
                                                color: colors.color_text,
                                                border: '0.3vw solid',
                                                fontWeight: 'bolder'
                                            }}>
                                            {t('Send')}
                                        </button>
                                    </div>
                                    {
                                        form.state === 'loading' ?
                                            (<div className={styles.sendingDiv}> {t('Sending')}....</div>) : form.state === 'error' ? (<div>{form.message}</div>) :
                                                (form.state === 'success' && <div className={styles.sendingDiv} style={{ color: 'white', fontWeight: 'bold' }}>{t('MessageDelivered')}</div>)
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.items} >
                    <div className={styles.contactInfosFrame}
                        style={{
                            border: '0.3vw solid',
                            borderColor: colors.color_text,
                            backgroundColor: colors.color_bgTrans,
                        }}>
                        <h1 
                            className={styles.frameTitles}                            
                            style={{ color: colors.color_text, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            {t('CommunicationChannels')}
                        </h1>
                        <div className={styles.info}>
                            <NextImage
                                className={styles.contactImages}
                                src={require("../img/phone.png")}
                                alt=""
                                loading="lazy" />
                            <h2 className={styles.contactTextTitles}>Tel:</h2>
                            <p className={styles.contactTexts}>+90 242 426 22 44</p>
                        </div>
                        <div className={styles.info}>
                            <NextImage
                                className={styles.contactImages}
                                src={require("../img/mail.png")}
                                alt=""
                                loading="lazy" />
                            <h2 className={styles.contactTextTitles} >Mail:</h2>
                            <p className={styles.contactTexts}> info@mskserateknolojileri.com</p>
                        </div>
                        <div className={styles.info}>
                            <NextImage
                                className={styles.contactImages}
                                src={require("../img/location.png")}
                                alt=""
                                loading="lazy" />
                            <h2 className={styles.contactTextTitles}>{t('Address')}:</h2>
                            <p className={styles.contactTexts}>Macun Mahalesi<br /> İsmail Ogan Caddesi<br /> No:3-1/4<br /> Aksu / Antalya / TÜRKİYE</p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{padding:0,margin:0,height:'0.3vw', width: '100%', backgroundColor: colors.color_bg }}>
                <hr style={{ height: '0.3vw',  border: 0, backgroundColor: colors.color_text }} />
            </div>

            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25507.93007657128!2d30.8454945!3d36.9503225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a4b5fef51f55b14!2sMSK%20SERA%20TEKNOLOJ%C4%B0LER%C4%B0%20SAN.T%C4%B0C.LTD.%C5%9ET%C4%B0.%20(msk%20sera%20otomasyonu)!5e0!3m2!1str!2str!4v1669476759419!5m2!1str!2str" width="100%" height="400" style={{ border: 0, bottom: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div style={{padding:0,margin:0,height:'0.3vw', width: '100%', backgroundColor: colors.color_bg }}>
                <hr style={{ height: '0.3vw',  border: 0, backgroundColor: colors.color_text }} />
            </div>

        </div>
    )
}

export default Contact