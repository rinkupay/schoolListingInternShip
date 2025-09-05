
import SchoolCard from "../components/SchoolCard";
type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
};

async function getSchools(): Promise<School[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/schools/list`,
    {
      cache: "no-store", // always fetch fresh data
    }
  );
  return res.json();
}

export default async function ShowSchoolsPage() {
  const schools = await getSchools();


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {schools.map((school) => (
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
