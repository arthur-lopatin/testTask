import Card from '../Card/Card';
import styles from './Content.module.scss';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_item}>
        <h1>
          Случайные факты о собачках
          {/* {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'} */}
        </h1>
        <div className={styles.search_block}>
          <img src='/img/search.svg' alt='Search' />
          {/* {{searchValue && ( */}
          <img
            //   onClick={() => setSearchValue('')}
            className={styles.clearBtn}
            src='/img/btn-remove.svg'
            alt='Clear'
          />
          {/* )} */}
          <input
            // onChange={onChangeSearchInput}
            // value={searchValue}
            placeholder='Поиск...'
          />
        </div>
      </div>
      <div className={styles.d_flex}>
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {items
          .filter((item: any) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item: any, index: any) => (
            <Card
              key={index}
              onFavorite={onAddToFavorite}
              onPlus={(obj: any) => onAddToCart(obj)}
              {...item}
            />
          ))} */}
      </div>
    </div>
  );
};

export default Content;
