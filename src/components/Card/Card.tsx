import React from 'react';

import styles from './Card.module.scss';

const Card: React.FC = () => {
  const [isFavorite, setIsFavorite] = React.useState();
  const [isAdded, setIsAdded] = React.useState(false);

  // const onClickPlus = () => {
  //   onPlus({});
  //   setIsAdded(!isAdded);
  // };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img
            // onClick={onClickFavorite}
            src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
            alt='Unliked'
          />{' '}
          <img
            style={{ marginLeft: '100px' }}
            className={styles.plus}
            // onClick={onClickPlus}
            src='/img/btn-delete.svg'
            alt='Plus'
          />
        </div>
        <img
          style={{ width: '133px', height: '112px', marginTop: '30px' }}
          // src={imageUrl}
          src='./img/card.png'
          alt='Sneakers'
        />{' '}
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          repudiandae cumque consequuntur
        </h5>
      </div>
    </div>
  );
};

export default Card;
