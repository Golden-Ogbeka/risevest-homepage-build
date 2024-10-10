import React from 'react';
import styles from './styles.module.css';

const RegulationSection = () => {
  return (
    <section id='regulation' className={styles.regulationSection + ' section'}>
      <div className={'container ' + styles.regulationContent}>
        <h1>How we are Regulated</h1>
        <p>
          Rise is registered and regulated both in the US and in Nigeria. Our team is made
          up of US registered investment advisers, our Nigerian users are covered by our
          SEC licensed trustees, ARM Trustees and all our assets are held with regulated
          third parties, in all relevant jurisdictions
        </p>
      </div>
    </section>
  );
};

export default RegulationSection;
