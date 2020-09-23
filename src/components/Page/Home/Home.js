import Axios from "axios";
import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Page from "../Page";
import CategoryItems from "./CategoryItems/CategoryItems";
import Promo from "./Promo/Promo";

export default function Home() {
  const [state, setState] = useImmer({ isLoading: true, categories: [] });

  useEffect(() => {
    /* 
    usually here would be request to get list of popular categories
    then request to get few items from each category
    but since we only have 2 uncategorized product, i've hardcoded categories
    it's just one request to get products from back
    */
    setState((draft) => {
      for (let i = 1; i < 4; i++) draft.categories.push({ title: `Category${i}`, products: [] });
    });

    Axios.get("/products/").then((response) => {
      setState((draft) => {
        for (let i = 0; i < 3; i++) {
          draft.categories[i].products = response.data;
        }
        draft.isLoading = false;
      });
    });
    // eslint-disable-next-line
  }, []);

  if (state.isLoading)
    return (
      <Page title="Homepage">
        <LoadingIcon />
      </Page>
    );

  return (
    <Page title="Homepage">
      <Promo />
      <section className="category-items">
        <div className="category-items__wrapper">
          <h1>Our most popular categories</h1>
          {state.categories.map((category) => (
            <CategoryItems data={category} key={category.title} />
          ))}
        </div>
      </section>
    </Page>
  );
}
