"use client";

import { useState, useEffect } from "react";
import { getImages } from "@/services/images";
import Image from "next/image";
import { ImageType } from "@/classes/imageType";

import styles from "@/app/components/style/display_images.module.css";

export default function DisplayImages() {
  const [images, setImages] = useState<ImageType[] | null>(null);

  useEffect(() => {
    const gettingImages = async () => {
      const data = await getImages();
      setImages(data);
    };

    gettingImages();
  }, []);

  return (
    <div>
      <div className={styles.display_images_container}>
        {images ? (
          images.map((image) => (
            <div className={styles.display_images_item} key={image.image_id}>
              <Image
                src={image.location}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                }}
                alt={image.name}
              ></Image>
              <div className={styles.display_images_item_description}>
                {image.tags ? (
                  image.tags.map((tag) => (
                    <p className={styles.display_images_item_tag} key={tag}>
                      {tag}
                    </p>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}
