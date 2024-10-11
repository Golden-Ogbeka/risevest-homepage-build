import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import CommentCard from './comment-card';
import { customerRatings } from './data';
import styles from './styles.module.css';

const CommentScroll = () => {
  return (
    <ScrollContainer className={styles.scrollContainer}>
      {customerRatings.map((rating, index) => (
        <CommentCard key={index} rating={rating} />
      ))}
    </ScrollContainer>
  );
};

export default CommentScroll;
