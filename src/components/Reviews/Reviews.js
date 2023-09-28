import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';
import PropTypes from 'prop-types';
import { Title, TitleAuthor } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('fetch');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsContent = await API.reviews(movieId);
        setReviews(reviewsContent);
        setStatus('finish');
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    status === 'finish' &&
    (reviews.length > 0 ? (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <Review author={author} content={content} />
          </li>
        ))}
      </ul>
    ) : (
      <Title>We don't have any reviews for this movie</Title>
    ))
  );
};

const Review = ({ author = '', content = '' }) => {
  return (
    <div>
      <TitleAuthor>Author: {author}</TitleAuthor>
      <Title>{content}</Title>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Reviews;
