import React from 'react';
import CommentScroll from './comment-scoll';
import styles from './styles.module.css';

const CustomerRating = () => {
  return (
    <section id='customer-rating' className='section'>
      <div className={'container ' + styles.desktopHeader}>
        <h1>From The People Who Use Rise</h1>
        <p>
          Our mission at Risevest is to empower more people just like you to achieve your
          personal financial goals.
        </p>
      </div>
      <div className={'container ' + styles.mobileHeader}>
        <h1>What our customers are saying</h1>
        <p>We serve over 80,000 amazing users.</p>
      </div>
      <CommentScroll />
    </section>
  );
};

export default CustomerRating;
