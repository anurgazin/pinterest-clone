export class ImageType {
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