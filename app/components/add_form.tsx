"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addImage } from "@/services/images";
import Link from "next/link";

import styles from "@/app/components/style/login_form.module.css";

export default function AddForm() {
  const [image, setImage] = useState<File | null>(null);
  const [image_name, setImageName] = useState("");
  const [tags, setTags] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files && e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image || !image_name || !tags) {
      setErrorMessage("Please fill out all fields");
      return;
    }
    try {
      const tagsArray = tags.split(",").map((tag) => tag.trim());
      await addImage(image, image_name, tagsArray);
      setSuccessMessage("Image added successfully");
      setImage(null);
      setImageName("");
      setTags("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to add image");
    }
  };
  return (
    <div>
      <h2>Add Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <input
          type="text"
          value={image_name}
          onChange={(e) => setImageName(e.target.value)}
          placeholder="Image Name"
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
        />
        <button type="submit">Add Image</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}
