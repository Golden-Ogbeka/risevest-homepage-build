import React from 'react';
import PartnerImage from '../../assets/images/rise-partners.png';
import styles from './styles.module.css';

const PartnerSection = () => {
  return (
    <section id='partners-section' className={'container ' + styles.partnerContainer}>
      <p>We are supported by</p>
      <img src={PartnerImage} alt='Risevest Partners' />
    </section>
  );
};

export default PartnerSection;
