"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ImageType } from "@/classes/imageType";
import { fetchImages, selectImages } from "@/lib/slices/imageSlice";
import { selectUser } from "@/lib/slices/userSlice";
import styles from "@/app/components/style/display_images.module.css";
import Link from "next/link";
import SingleImage from "./single_image";

export default function DisplayImages() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const images = useAppSelector(selectImages);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const status = useAppSelector((state: any) => state.image.status);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    dispatch(fetchImages([]));
  }, [dispatch]);
  return (
    <div>
      {user && user.isAuthenticated ? (
        <div className={styles.display_images_container}>
          {status === "succeeded" ? (
            images.map((image: ImageType) => (
              <div
                className={styles.display_images_item}
                key={image.image_id}
                onClick={() => handleImageClick(image)}
              >
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
      ) : (
        <li>
          <Link href="/login">Please, login to watch dashboard</Link>
        </li>
      )}
      {selectedImage && (
        <SingleImage
          image={selectedImage}
          user={user.user}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
