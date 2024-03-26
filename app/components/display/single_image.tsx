import { ImageType } from "@/classes/imageType";
import { UserType } from "@/classes/userType";
import Image from "next/image";
import styles from "@/app/components/style/single_image.module.css";

type Props = {
  image: ImageType;
  user: UserType;
  onClose: () => void;
};

export default function SingleImage({ image, user, onClose }: Props) {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      (event.target as HTMLElement).classList.contains(
        styles.singleImageOverlay
      )
    ) {
      onClose();
    }
  };

  return (
    <div className={styles.singleImageOverlay} onClick={handleClickOutside}>
      <div className={styles.singleImageContent}>
        <Image
          src={image.location}
          width={0}
          height={0}
          priority
          sizes="30vw"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
          alt={image.name}
        />
        <div className={styles.singleImageContentParams}>
          <h1>{image.name}</h1>
          <div className={styles.singleImageContentParamsTags}>
            {image.tags ? (
              image.tags.map((tag) => <p key={tag}>{tag}</p>)
            ) : (
              <p></p>
            )}
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
