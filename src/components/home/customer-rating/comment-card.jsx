import React from 'react';
import styles from './styles.module.css';

const CommentCard = ({ rating }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardComment}>{rating.comment}</div>
        <div className={styles.commentOwner}>
          <img src={rating.image} alt={`${rating.customerName}'s comment`} />
          <span>{rating.customerName}</span>
          <p>{rating.job}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
