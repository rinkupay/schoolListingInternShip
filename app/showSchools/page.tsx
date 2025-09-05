"use client"; // make this a client component

import React, { useEffect, useState } from "react";
import SchoolCard from "../../components/SchoolCard";
import Loader from "@/components/Loader";

type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
};

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState<School[] | null>(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/schools/list`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Failed to fetch schools", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) return <Loader />; // show loader while fetching

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {schools && schools.map((school) => (
        <SchoolCard
          key={school.id}
          image={school.image}
          name={school.name}
          board={school.address}
          location={school.city}
          area={school.city}
          rating={4}
        />
      ))}
    </div>
  );
}
