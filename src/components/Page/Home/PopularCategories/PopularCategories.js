import React from "react";
import CategoryCarousel from "./CategoryCarousel/CategoryCarousel";

export default function PopularCategories({ categories }) {
  return (
    <section className="popular-categories">
      <div className="popular-categories__wrapper">
        <h1>Our most popular categories</h1>
        {categories.map((category) => (
          <CategoryCarousel data={category} key={category.title} />
        ))}
      </div>
    </section>
  );
}
