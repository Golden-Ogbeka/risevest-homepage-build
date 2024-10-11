import React from 'react';
import AssetsList from './assets-list';
import styles from './styles.module.css';

const AssetClassesSection = () => {
  return (
    <section id='asset-classes' className='container section'>
      <h1 className={styles.assetSectionHeader}>Asset Classes</h1>
      <p className={styles.assetSectionDescription}>
        It&apos;s your money, choose where you invest it
      </p>
      <AssetsList />
    </section>
  );
};

export default AssetClassesSection;
