import React from 'react';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right-white.svg';
import styles from './styles.module.css';

const FutureSavingSection = () => {
  return (
    <section id='future-saving' className={'section container ' + styles.futureSection}>
      <div className={styles.futureSectionContent}>
        <div className={styles.futureSectionImage}>
          <div className={styles.futureImageContainer}>
            <div className={styles.futureImageTextContainer}>
              <p className={styles.buildText}>Build Wealth</p>
              <p className={styles.buildDescription}>
                Invest for long-term goals like retirement with this plan. It&apos;s your
                financial freedom partner.
              </p>
              <a href='/#'>
                <span>Start investing</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.futureTextContainer}>
          <h1>The Rise App</h1>
          <h2>
            Save for your <span>future</span>
          </h2>
          <p>
            With Rise, you achieve your financial goals faster. Save for school, your
            home, vacations, your children&apos;s future and more.
          </p>
          <button>Start Saving</button>
        </div>
      </div>
    </section>
  );
};

export default FutureSavingSection;
