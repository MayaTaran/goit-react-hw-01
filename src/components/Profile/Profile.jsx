import clsx from "clsx";
import css from "./Profile.module.css";
export const Profile = ({image, name, tag, location, stats}) => {
    return(
<div className={css.container}>
  <div className={css.top}>
                <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
                <p className={css.name}>{name }</p>
                <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span>Followers</span>
      <span className={css.number}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span className={css.number}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span className={css.number}>{stats.likes}</span>
    </li>
  </ul>
        </div>)
}
