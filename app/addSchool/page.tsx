"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(3),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  contact: z.string().regex(/^\d{10}$/, "Must be 10 digits"),
  email_id: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  image: z.any(),
});

type FormData = z.infer<typeof schema>;

export default function AddSchoolPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "image" && value[0]) {
          formData.append("image", value[0]);
        } else {
          formData.append(key, value as string);
        }
      });

      const res = await fetch("/api/schools/add", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("School added successfully!");
      } else {
        toast.error("Failed to add school");
      }
    } catch (err) {
      toast.error("Something went wrong: " + err);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="relative max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      {loading && <Loader />}

      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="School Name" className="w-full border p-2 rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input {...register("address")} placeholder="Address" className="w-full border p-2 rounded" />
        <input {...register("city")} placeholder="City" className="w-full border p-2 rounded" />
        <input {...register("state")} placeholder="State" className="w-full border p-2 rounded" />
        <input {...register("contact")} placeholder="Contact" className="w-full border p-2 rounded" />
        <input {...register("email_id")} placeholder="Email" className="w-full border p-2 rounded" />

        <input
          type="file"
          {...register("image")}
          onChange={handlePreview}
          className="w-full cursor-pointer border rounded"
        />
        {preview && <Image src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded border" />}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
