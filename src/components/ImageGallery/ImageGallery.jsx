import css from './ImageGallery.module.css';
//import { ImageModal } from '../ImageModal/ImageModal'
import { ImageCard } from "../ImageCard/ImageCard";

export default function ImageGallery({ cards, onImageClick }) {
    return (
        <ul className={css.gallery}>
            {cards.map(card => (
                <li className={css.galleryCard} key={card.id}>
                    <ImageCard
                        card={card}
                        onImageClick={() =>
                            onImageClick(card.urls.regular, card.alr_description)
                        }
                    />
                </li>
            ))}
        </ul>
    );
}
        


    //ТЗ   * <ul>
	//{/* Набір елементів списку із зображеннями */}
// 	<li>
// 		<div>
// 		  <img src="" alt="" />
// 		</div>
// 	</li>
// </ul> */}


// import { Grid } from "../Grid/Grid";
// import { PhotosGalleryItem } from "../PhotosGalleryItem/PhotosGalleryItem";

// export const PhotosGallery = ({ photos }) => {
//   return <Grid>
//   {
//      photos.map((photo) => 
//        <PhotosGalleryItem
//          key={photo.id}
//          avg_color={photo.avg_color}
//          src={photo.src}
//          alt={photo.alt} />)
//   }
// </Grid>;
// };