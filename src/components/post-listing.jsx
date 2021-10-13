import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./post-listing.module.scss";

const PostListing = ({ data }) => (
  <div className={styles.postListing}>
    {data.edges.map(({ node }, i) => (
      <div
        className={`${styles.postItem} ${
          i % 3 === 0
            ? styles.thirdPost
            : i % 2 === 0
            ? styles.secondPost
            : styles.firstPost
        }`}
        key={node.id}
      >
        <Link
          className={styles.postLink}
          to={`/insights/${node.slug}`}
          title={`Link to ${node.title}`}
        >
          <img
            className={styles.postImage}
            src={node.heroImage.file.url}
            title={node.heroImage.title}
            alt={node.heroImage.description}
          />
          <h2 className={styles.postTitle}>{node.title}</h2>
        </Link>
      </div>
    ))}
  </div>
);

export default PostListing;
