"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { ImageType } from "@/classes/imageType";

import styles from "@/app/components/style/display_images.module.css";
import { fetchImages, selectImages } from "@/lib/slicers/imageSlicer";
import { useSelector } from "react-redux";

export default function DisplayImages() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const status = useSelector((state: any) => state.image.status);

  useEffect(() => {
    dispatch(fetchImages([]));
  }, [dispatch]);
  return (
    <div>
      <div className={styles.display_images_container}>
        {status === 'succeeded' ? (
          images.map((image: ImageType) => (
            <div className={styles.display_images_item} key={image.image_id}>
              <Image
                src={image.location}
                width={0}
                height={0}
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                }}
                alt={image.name}
              />
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
