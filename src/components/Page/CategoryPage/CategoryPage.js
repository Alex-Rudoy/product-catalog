import Axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import ProductCard from "../../_reusable/ProductCard/ProductCard";
import Page from "../Page";

export default function CategoryPage() {
  const [state, setState] = useImmer({ isLoading: true, title: "", products: [] });
  const { id } = useParams();

  useEffect(() => {
    const cancelRequest = Axios.CancelToken.source();

    Axios.get("/products/", { cancelToken: cancelRequest.token })
      .then((response) => {
        setState((draft) => {
          draft.title = "Category" + id;
          draft.products = response.data;
          draft.isLoading = false;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      cancelRequest.cancel();
    };
    // eslint-disable-next-line
  }, []);

  if (state.isLoading)
    return (
      <Page title="Category">
        <LoadingIcon />
      </Page>
    );

  return (
    <Page title={state.title}>
      <section className="category-page">
        <h1 className="category-page__title">{state.title}</h1>
        <div className="category-page__products">
          {state.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </Page>
  );
}
