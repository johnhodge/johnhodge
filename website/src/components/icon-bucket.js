import React from "react"
import style from "./icon-bucket.module.css"
import { useStaticQuery, graphql } from "gatsby"

const IconBucket = () => {
  const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              link
              name
            }
            menuLinksSecondary {
              link
              name
            }
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )
  const profile = data.site.siteMetadata.social

  // Show/hide social media profiles
  let socialBucket = document.getElementById("social-bucket")
  if (socialBucket) {
    document.getElementById("social-toggle").addEventListener("click", toggleSocial);
  }
  function toggleSocial() {
    socialBucket.classList.toggle("hide-icon-bucket");
  }

  return (
    <div className={style.socialFollow}>
      <div id="social-bucket" className={`${style.iconBucket} hide-icon-bucket`}>
        <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className={style.iconLink} title="Follow me on Github">
          <img className={style.icon} alt="Github link profile" src="https://unpkg.com/simple-icons@v3/icons/github.svg" />
        </a>
        <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noreferrer" className={style.iconLink} title="Peep my Tweets">
          <img className={style.icon} alt="Twitter profile link" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" />
        </a>
      </div>
      <div className={style.iconToggle}>
        <img className={style.toggle} id="social-toggle" title="Let's socialize" alt="See my social media accounts." src={"/social-follow.svg"} />
      </div>
    </div>

  )

}
export default IconBucket