import Axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Page from "../Page";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductReviews from "./ProductReviews/ProductReviews";

export default function ProductPage() {
  const [state, setState] = useImmer({
    isLoading: true,
    productData: { id: "", img: "", text: "", title: "" },
    reviews: [],
  });
  const { id } = useParams();

  useEffect(() => {
    /* 
    here should be request to get detailed info about the product
    but we only have endpoint for all products, so i've just took the one that i need
    */
    async function getProductData() {
      let products = await Axios.get("/products/");
      let reviews = await Axios.get(`/reviews/${products.data[id - 1].id}`);
      setState((draft) => {
        draft.productData = products.data[id - 1];
        draft.reviews = reviews.data;
        draft.isLoading = false;
      });
    }
    getProductData();
    // eslint-disable-next-line
  }, [id]);

  // function to add a newly created review
  function addNewReview(review) {
    setState((draft) => {
      draft.reviews.unshift(review);
    });
  }

  if (state.isLoading)
    return (
      <Page title="Product">
        <LoadingIcon />
      </Page>
    );

  return (
    <Page title={state.productData.title}>
      <ProductDescription productData={state.productData} />
      <ProductReviews reviews={state.reviews} productId={id} addNewReview={addNewReview} />
    </Page>
  );
}
