import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../components/article.module.scss';

const Article = ({ post }) => {
  return (
    <article>
      <h1 className={styles.headerText}>{post.title}</h1>
      <p className={styles.publishDate}>
        Thursday, July 22, 2021, 10:32 AM EDT
      </p>
      <div className={styles.articleInfo}>
        <Link
          to={`/category/${post.category.name
            .toLowerCase()
            .replace(/\W/gm, '-')}`}
          link={`Link to ${post.category.name} listing page`}>
          <svg
            id='Group_5'
            data-name='Group 5'
            xmlns='http://www.w3.org/2000/svg'
            width='41.276'
            height='41.276'
            viewBox='0 0 41.276 41.276'>
            <path
              id='Path_6'
              data-name='Path 6'
              d='M0,0H41.276V41.276H0Z'
              fill='none'
            />
            <path
              id='Path_7'
              data-name='Path 7'
              className={styles.path7}
              d='M16.759,3,32.237,18.479a2.58,2.58,0,0,1,0,3.44L21.918,32.237a2.58,2.58,0,0,1-3.44,0L3,16.759V9.879A6.879,6.879,0,0,1,9.879,3h6.879'
              transform='translate(2.16 2.16)'
              fill='none'
              stroke='#fff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
            />
            <ellipse
              id='Ellipse_2'
              data-name='Ellipse 2'
              className={styles.ellipse2}
              cx='3.5'
              cy='4'
              rx='3.5'
              ry='4'
              transform='translate(11.773 11.276)'
              fill='none'
              stroke='#fff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
            />
          </svg>
          {post.category.name}
        </Link>
        <Link
          to={`/author/${post.author.name.toLowerCase().replace(/\W/gm, '-')}`}
          link={`Link to ${post.author.name} listing page`}>
          <svg
            id='Group_14'
            data-name='Group 14'
            xmlns='http://www.w3.org/2000/svg'
            width='41.276'
            height='41.276'
            viewBox='0 0 41.276 41.276'>
            <path
              id='Path_19'
              data-name='Path 19'
              d='M0,0H41.276V41.276H0Z'
              fill='none'
            />
            <circle
              id='Ellipse_7'
              data-name='Ellipse 7'
              className={styles.ellipse7}
              cx='7'
              cy='7'
              r='7'
              transform='translate(8 5)'
              fill='none'
              stroke='#2c76bf'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
            <path
              id='Path_20'
              data-name='Path 20'
              className={styles.path20}
              d='M3,25.319v-3.44A6.879,6.879,0,0,1,9.879,15h6.879a6.879,6.879,0,0,1,6.879,6.879v3.44'
              transform='translate(2.16 10.798)'
              fill='none'
              stroke='#2c76bf'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
            <path
              id='Path_21'
              data-name='Path 21'
              className={styles.path21}
              d='M16,3.13a6.879,6.879,0,0,1,0,13.329'
              transform='translate(11.517 2.253)'
              fill='none'
              stroke='#2c76bf'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
            <path
              id='Path_22'
              data-name='Path 22'
              className={styles.path22}
              d='M23.16,25.211v-3.44A6.879,6.879,0,0,0,18,15.15'
              transform='translate(12.957 10.906)'
              fill='none'
              stroke='#2c76bf'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
          {post.author.name}
        </Link>
      </div>
    </article>
  );
};

export default Article;
