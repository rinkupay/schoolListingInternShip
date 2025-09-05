🛠 Tech Stack

Frontend: Next.js (App Router, TypeScript, React Hooks)

Backend: Next.js API Routes (Serverless)

Database: MySQL

Image Storage: Cloudinary

Form Handling & Validation: react-hook-form + Zod

Styling: TailwindCSS


<!-- FOLDER STRUCTURE -->
my-school-app/
 ├─ app/
 │   ├─ addSchool/
 │   │    └─ page.tsx            # Page 1 - Add School Form
 │   ├─ showSchools/
 │   │    └─ page.tsx            # Page 2 - Show Schools
 │   ├─ api/
 │   │    └─ schools/
 │   │         ├─ add/route.ts   # API route to insert data
 │   │         └─ list/route.ts  # API route to fetch data
 │   └─ layout.tsx               # Global layout with Header & Footer
 │
 ├─ lib/
 │   ├─ db.ts                     # MySQL connection
 │   └─ cloudinary.ts             # Cloudinary upload utility
 │
 ├─ components/
 │   ├─ Header.tsx                # Header component
 │   ├─ Footer.tsx                # Footer component
 │   └─ SchoolCard.tsx            # Reusable card to show a school
 │
 ├─ public/
 │   └─ schoolImages/             # Uploaded images (optional if using Cloudinary)
 │
 ├─ styles/
 │   └─ globals.css               # Tailwind or global CSS
 │
 ├─ package.json
 └─ tsconfig.json


⚙️ Features
Add School

Users can add school details: name, address, city, state, contact, email.

Image upload handled via Cloudinary.

Validation for all fields (email, contact number, required fields).

Responsive form for mobile and desktop.

Show Schools

Displays a grid of school cards, similar to e-commerce product listing.

Shows school name, address, city, and image.

Responsive layout with TailwindCSS.

Shared Components

Header: Navigation links with active page highlighting.

Footer: Copyright & tech credits.

SchoolCard: Reusable card for displaying school info.



🛠 Installation

Clone the repository

git clone <repo_url>
cd my-school-app


Install dependencies

npm install


Configure environment variables (.env.local)

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=schooldb

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000


Run the project

npm run dev