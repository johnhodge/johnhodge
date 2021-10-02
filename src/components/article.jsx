import React from "react";
import { Link } from "gatsby";
import * as styles from "./article.module.scss";

const Article = ({ post, pageTitle, createdAt }) => (
    <article>
      <h1 className={styles.headerText}>{pageTitle}</h1>
      {post ? (
        <div className={styles.articleInfo}>
          <span title="Published at">
            <svg
              id="Group_2"
              data-name="Group 2"
              xmlns="http://www.w3.org/2000/svg"
              width="41.276"
              height="41.276"
              viewBox="0 0 41.276 41.276"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,0H41.276V41.276H0Z"
                fill="none"
              />
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                className={styles.styledSvgElement}
                width="27.704"
                height="27.704"
                rx="2"
                transform="translate(7.276 8.535)"
                fill="none"
                stroke="#3692f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_1"
                data-name="Line 1"
                className={styles.styledSvgElement}
                y2="7.556"
                transform="translate(27.424 4.757)"
                fill="none"
                stroke="#3692f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                className={styles.styledSvgElement}
                y2="7.556"
                transform="translate(13.572 4.757)"
                fill="none"
                stroke="#3692f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_3"
                data-name="Line 3"
                className={styles.styledSvgElement}
                x2="27.704"
                transform="translate(7.276 18.609)"
                fill="none"
                stroke="#3692f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                className={styles.styledSvgElement}
                width="3.778"
                height="2.519"
                transform="translate(13.572 26.165)"
                fill="none"
                stroke="#3692f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            {createdAt}
          </span>
          <Link
            to={`/category/${post.category.name
              .toLowerCase()
              .replace(/\W/gm, "-")}`}
            title={`Link to ${post.category.name} listing page`}
          >
            <svg
              id="Group_5"
              data-name="Group 5"
              xmlns="http://www.w3.org/2000/svg"
              width="41.276"
              height="41.276"
              viewBox="0 0 41.276 41.276"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M0,0H41.276V41.276H0Z"
                fill="none"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                className={styles.styledSvgElement}
                d="M16.759,3,32.237,18.479a2.58,2.58,0,0,1,0,3.44L21.918,32.237a2.58,2.58,0,0,1-3.44,0L3,16.759V9.879A6.879,6.879,0,0,1,9.879,3h6.879"
                transform="translate(2.16 2.16)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <ellipse
                id="Ellipse_2"
                data-name="Ellipse 2"
                className={styles.styledSvgElement}
                cx="3.5"
                cy="4"
                rx="3.5"
                ry="4"
                transform="translate(11.773 11.276)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            {post.category.name}
          </Link>
          <Link
            to={`/author/${post.author.name
              .toLowerCase()
              .replace(/\W/gm, "-")}`}
            title={`Link to ${post.author.name}'s listing page`}
          >
            <svg
              id="Group_14"
              data-name="Group 14"
              xmlns="http://www.w3.org/2000/svg"
              width="41.276"
              height="41.276"
              viewBox="0 0 41.276 41.276"
            >
              <path
                id="Path_19"
                data-name="Path 19"
                d="M0,0H41.276V41.276H0Z"
                fill="none"
              />
              <circle
                id="Ellipse_7"
                data-name="Ellipse 7"
                className={styles.styledSvgElement}
                cx="7"
                cy="7"
                r="7"
                transform="translate(8 5)"
                fill="none"
                stroke="#2c76bf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                className={styles.styledSvgElement}
                d="M3,25.319v-3.44A6.879,6.879,0,0,1,9.879,15h6.879a6.879,6.879,0,0,1,6.879,6.879v3.44"
                transform="translate(2.16 10.798)"
                fill="none"
                stroke="#2c76bf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_21"
                data-name="Path 21"
                className={styles.styledSvgElement}
                d="M16,3.13a6.879,6.879,0,0,1,0,13.329"
                transform="translate(11.517 2.253)"
                fill="none"
                stroke="#2c76bf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_22"
                data-name="Path 22"
                className={styles.styledSvgElement}
                d="M23.16,25.211v-3.44A6.879,6.879,0,0,0,18,15.15"
                transform="translate(12.957 10.906)"
                fill="none"
                stroke="#2c76bf"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {post.author.name}
          </Link>
        </div>
      ) : (
        ""
      )}
    </article>
  );

export default Article;
