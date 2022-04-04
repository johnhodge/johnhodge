import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./post-listing.module.scss";

const PostListing = ({ data }) => (
  <div className={styles.postListing}>
    {data.edges.map(({ node }, i) => (
      <div
        className={`${styles.postItem} ${
          (i + 1) % 3 === 0
            ? styles.thirdPost
            : (i + 1) % 2 === 0
            ? styles.secondPost
            : styles.firstPost
        }`}
        key={node.id}
      >
        {console.log(i)}
        <Link
          className={styles.postLink}
          to={`/insights/${node.slug}`}
          title={`Link to ${node.title}`}
        >
          <div className={styles.postContainer}>
            <img
              className={styles.postImage}
              src={node.heroImage.file.url}
              title={node.heroImage.title}
              alt={node.heroImage.description}
            />
            <h2 className={styles.postTitle}>{node.title}</h2>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default PostListing;
