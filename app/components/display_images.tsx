"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getImages } from "@/services/images";
import Image from "next/image";
import { ImageType } from "@/classes/imageType";

export default function DisplayImages() {
  const [images, setImages] = useState<ImageType[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const gettingImages = async () => {
      const data = await getImages();
      setImages(data);
    };

    gettingImages();
  }, [router]);

  return (
    <div>
      <div>
        {images ? (
          images.map((image) => (
            <div key={image.image_id}>
              <Image
                src={image.location}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "25%", height: "auto" }}
                alt={image.name}
              ></Image>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}
