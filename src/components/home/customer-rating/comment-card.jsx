import React from 'react';
import styles from './styles.module.css';

const CommentCard = ({ rating }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardComment}>{rating.comment}</div>
        <div className={styles.commentOwner}>
          <img src={rating.image} alt={`${rating.customerName}'s comment`} />
          <p>{rating.customerName}</p>
          <span>{rating.job}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
