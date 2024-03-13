"use client";

import { useState, useEffect } from "react";
import { getUsername } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getImages } from "@/services/images";
import Image from "next/image";
import { ImageType } from "@/classes/imageType";

export default function DisplayImages() {
  const [user, setUser] = useState();
  const [images, setImages] = useState<ImageType[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const username = getUsername();
    const gettingImages = async () => {
      const data = await getImages();
      setImages(data);
    };
    if (username !== "") {
      setUser(username);
      gettingImages();
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      {user}
      <div>
        {images ? (
          images.map((image) => (
            <div key={image.image_id}>
              <Image
                src={image.location}
                width={500}
                height={500}
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
