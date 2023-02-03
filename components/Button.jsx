import styles from "../css/Button.module.css";
import NextImage from "next/image";

function Buttons() {
  return (
    <div className={styles.container}>
        <div className={styles.buttons}>
            <div className={styles.imageDiv}>
              <a href="tel:+902424262244">
                  <NextImage 
                      className={styles.imageCall} 
                      src={require('../img/call.png')} 
                      alt="" 
                      objectFit="contain" 
                      loading="lazy" />
              </a>
            </div>
            <p className={styles.number}>+90 242 426 2244</p>
        </div>
    </div>
  )
}

export default Buttons