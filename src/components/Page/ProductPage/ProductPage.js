import Axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Error404 from "../Error404/Error404";
import Page from "../Page";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductReviews from "./ProductReviews/ProductReviews";

export default function ProductPage() {
  const [state, setState] = useImmer({
    isLoading: true,
    notFound: false,
    reviews: [],
  });
  const { id } = useParams();

  useEffect(() => {
    /* 
    here should be request to get detailed info about the product
    but we only have endpoint for all products, so i've just took the one that i need
    */
    const cancelRequest = Axios.CancelToken.source();

    async function getProductData() {
      try {
        let products = await Axios.get("/products/", { cancelToken: cancelRequest.token });

        // simple check if such product exists
        if (id > products.data.length || isNaN(id)) {
          setState((draft) => {
            draft.notFound = true;
          });
          return;
        }

        // ret reviews and save everything
        let reviews = await Axios.get(`/reviews/${products.data[id - 1].id}`, { cancelToken: cancelRequest.token });
        setState((draft) => {
          draft.productData = products.data[id - 1];
          draft.reviews = reviews.data;
          draft.isLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    }
    getProductData();

    return () => {
      cancelRequest.cancel();
    };
    // eslint-disable-next-line
  }, [id]);

  // function to add a newly created review. Passed down in AddReview component
  function addNewReview(review) {
    setState((draft) => {
      draft.reviews.unshift(review);
    });
  }

  if (state.notFound) return <Error404 />;

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
