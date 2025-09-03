import React from "react";

export default function Destinations() {
  const places = [
    {
      name: "Paris, France",
      description:
        "The city of lights, romance, and culture. Visit the Eiffel Tower, the Louvre, and stroll along the Seine.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Bali, Indonesia",
      description:
        "A tropical paradise with beaches, rice terraces, temples, and vibrant nightlife.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Tokyo, Japan",
      description:
        "A bustling metropolis blending modern innovation with rich traditions. Explore Shibuya Crossing, ancient temples, and cherry blossoms.",
      image:
        "https://res.cloudinary.com/jnto/image/upload/w_2000,h_1309,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/d4/ce/d4ce9c41-6bfe-4996-a998-271866907abd/02shutterstock_188615729_zynqxa",
    },
    {
      name: "New York, USA",
      description:
        "The city that never sleeps. See Times Square, Central Park, and the Statue of Liberty.",
      image:
        "http://www.pixelstalk.net/wp-content/uploads/2015/06/Statue-of-Liberty-HD-Wallpapers-in-New-York.jpg",
    },
    {
      name: "Sydney, Australia",
      description:
        "A coastal gem known for the Sydney Opera House, Harbour Bridge, Bondi Beach, and vibrant lifestyle.",
      image:
        "https://images7.alphacoders.com/716/thumb-1920-716104.jpg",
    },
    {
      name: "Cape Town, South Africa",
      description:
        "A stunning city beneath Table Mountain with breathtaking beaches, wineries, and cultural diversity.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section
  className="min-h-screen bg-cover bg-center pt-20 pb-16"
  style={{
    backgroundImage:
      "url('https://wallpaperaccess.com/full/2393045.jpg')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 bg-white/80 rounded-2xl shadow-lg p-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-700 mb-12">
      ✈️ Popular Destinations
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {places.map((place, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">
              {place.name}
            </h3>
            <p className="mt-3 text-gray-600">{place.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
