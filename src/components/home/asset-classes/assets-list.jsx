import React from 'react';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { assetClasses } from './data';
import styles from './styles.module.css';

const AssetsList = () => {
  return (
    <ul className={styles.assetList}>
      {assetClasses.map((item) => (
        <li key={item.title}>
          <div
            className={styles.assetHeader}
            style={{
              backgroundColor: item.headerColor,
            }}
          />
          <div className={styles.assetContent}>
            {/* Header Icon */}
            <div className={styles.assetIcon}>
              <div className={styles.assetIconBubble}>
                <img src={item.image} alt='Rise Asset Class' />
              </div>
            </div>

            {/* Contents */}
            <h2 className={styles.assetTitle}>{item.title}</h2>
            <p className={styles.assetDescription}>{item.description}</p>
            <div className={styles.assetInfoContainer}>
              <div className={styles.assetInfo}>
                <span className={styles.assetInfoTitle}>Historical returns:</span>
                <span> {item.returns}% per annum</span>
              </div>
              <div className={styles.assetInfo}>
                <span className={styles.assetInfoTitle}>Risk Level:</span>
                <span> {item.risk}</span>
              </div>
            </div>

            <a className={styles.assetButton} href='/#'>
              Learn how Real Estate work <ArrowRight />{' '}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AssetsList;
