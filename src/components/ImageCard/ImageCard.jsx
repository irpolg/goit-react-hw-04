//import { GridItem } from "../GridItem/GridItem";
import css from './ImageCard.module.css'


// export default function ImageCard ({src, alt}) {
export default function ImageCard({ card, onImageClick }) {
    return (
        <div className={css.divcard}>
            <img className={css.img}
                src={css.src}
                alt={css.alt}
                onClick={onImageClick}
            />
            <ul className={css.description}>
                <li>
                    <p>Photo by {card.user.name}</p>
                </li>
                <li>
                    <p>Likes: { }card.likes</p>
                </li>
            </ul>
        </div>
    );
}

/* ТЗ 
<div>
  <img src="" alt="" />
</div> */


// import style from './GridItem.module.css';

// export const GridItem = ({ children }) => {
//   return <li className={style.item}>{children}</li>;
// };