import React from 'react';
import CommunityImage from '../../assets/images/rise-community.png';
import styles from './styles.module.css';

const CommunitySection = () => {
  return (
    <section className='section container' id='community'>
      <div className={styles.communitySection}>
        <div className={styles.communityTextSection}>
          <h1>Join The Rise Community</h1>
          <p>
            If you want to go far, go together. Our Telegram community surrounds you with
            others who can help you along your financial journey with tips, support,
            advice and learning. It's completely free and open to new and seasoned
            investors.
          </p>
          <button>Join our Community</button>
        </div>
        <img src={CommunityImage} alt='Rise Community' />
      </div>
    </section>
  );
};

export default CommunitySection;
