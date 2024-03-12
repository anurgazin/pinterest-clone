"use client";

import { useState, useEffect } from "react";
import { getUsername } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getImages } from "@/services/images";
import Image from "next/image";

class ImageType {
  image_id: string;
  image_key: string;
  location: string;
  name: string;
  tags: string[];
  uploadedAt: number;
  uploadedBy: string;

  constructor(
    image_id: string,
    image_key: string,
    location: string,
    name: string,
    uploadedBy: string,
    tags: string[],
    uploadedAt: number
  ) {
    this.image_id = image_id;
    this.image_key = image_key;
    this.location = location;
    this.name = name;
    this.uploadedBy = uploadedBy;
    this.tags = tags;
    this.uploadedAt = uploadedAt;
  }
}

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
