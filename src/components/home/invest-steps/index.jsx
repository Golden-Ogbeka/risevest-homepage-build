import React from 'react';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { stepsData } from './data';
import styles from './styles.module.css';

const InvestmentStepsSection = () => {
  return (
    <section id='investment-steps' className='section container'>
      <div className={styles.investmentContainer}>
        {stepsData.map((data, index) => (
          <div
            key={index}
            className={
              data.showOnMobile ? styles.investmentStepContainer : styles.hideOnMobile
            }
          >
            <div className={styles.stepText}>
              <h2 className={styles.stepHeader}>{data.title}</h2>
              <h2 className={styles.stepHeaderMobile}>{data.mobileTitle}</h2>

              <p className={styles.stepDescription}>{data.description}</p>
              <p className={styles.stepDescriptionMobile}>{data.mobileDescription}</p>

              <a href='/#'>
                Start Investing Now
                <ArrowRight />
              </a>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={data.image}
                alt={`Investment step ${index + 1}`}
                className={styles.stepImage}
              />
              <div className={styles.imageContainerBar} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentStepsSection;
