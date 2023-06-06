import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaRegEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_row}>
          <div className={styles.footer_col}>
            <h4>Useful Links</h4>
            <div className={styles.footer_links}>
              <div>
                <a href='https://www.w3schools.com'>Term of use</a>
              </div>
              <div>
                <a href='https://www.w3schools.com'>Privacy policy</a>
              </div>
              <div>
                <a href='https://www.w3schools.com'>Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className={styles.footer_col}>
            <h4>Address</h4>
            <div className={styles.footer_col_hours}>
              <div>
                <span className={styles.icon_left}>
                  <FaMapMarkerAlt />
                </span>
                <span className=''>Vilnius, Konarskio 16-2</span>
              </div>
              <div>
                <span className={styles.icon_left}>
                  <FaPhone />
                </span>
                <span>+370 655 55555</span>
              </div>
              <div>
                <span className={styles.icon_left}>
                  <FaRegEnvelope />
                </span>
                <span>info@merlinx.lt</span>
              </div>
            </div>
          </div>

          <div className={styles.footer_col}>
            <h4>Working Hours</h4>

            <div className={styles.footer_col_hours}>
              <div>
                <span className={styles.icon_left}>I - V:</span>
                <span>9:00 - 22:00</span>
              </div>
              <div>
                <span className={styles.icon_left}>VI - VII:</span>
                <span>12:00 - 24:00</span>
              </div>
            </div>
          </div>

          <div className={styles.footer_col}>
            <h4>Fallow Us</h4>
            <div className={styles.social_icons}>
              <div className={styles.asa}>
                <a href='//facebook.com' rel='noopener noreferrer' target='_blank'>
                  <ImFacebook color='white' />
                </a>
              </div>
              <div className={styles.asa}>
                <a href='//twitter.com' rel='noopener noreferrer' target='_blank'>
                  <FaTwitter color='white' />
                </a>
              </div>
              <div className={styles.asa}>
                <a href='//instagram.com' rel='noopener noreferrer' target='_blank'>
                  <FaInstagram color='white' />
                </a>
              </div>
              <div className={styles.asa}>
                <a href='//linkedin.com' rel='noopener noreferrer' target='_blank'>
                  <FaLinkedin color='white' />
                </a>
              </div>
              <div className={styles.asa}>
                <a href='//yuotube.com' rel='noopener noreferrer' target='_blank'>
                  <FaYoutube color='white' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
