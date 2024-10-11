import React from 'react';
import styles from './styles.module.css';

const CommentCard = ({ rating }) => {
  return (
    <article className={styles.commentCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardComment}>{rating.comment}</div>
        <div className={styles.commentOwner}>
          <img src={rating.image} alt={`${rating.customerName}'s comment`} />
          <p>{rating.customerName}</p>
          <span>{rating.job}</span>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;
