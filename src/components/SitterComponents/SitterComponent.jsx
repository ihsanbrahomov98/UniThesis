import React, { useEffect, useState } from "react";

import SitterInfo from "./SitterInfo/SitterInfo";
import SitterReviews from "./SitterReviews/SitterReviews";
import axios from "axios";
import {
  BACK_END_BASE_URL,
  SITTERS_URL,
  FIND_ONE_SITTER,
} from "./../../utils/Utils";
import { useLocation } from "react-router-dom";
import SitterWriteReview from "./SitterWriteReview/SitterWriteReview";

const SitterComponent = () => {
  const [item, setItem] = useState("");

  let location = useLocation();

  useEffect(() => {
    let itemLocation = location.pathname.split("/")[2].split(":")[1];
    const fetchItems = async () => {
      const { data } = await axios.get(
        BACK_END_BASE_URL + SITTERS_URL + FIND_ONE_SITTER + itemLocation
      );
      setItem(data);
    };
    fetchItems();
  }, []);
  return (
    <>
      <SitterInfo item={item} />
      <SitterWriteReview item={item} />
      <SitterReviews item={item} />
    </>
  );
};

export default SitterComponent;
