import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FilterPage(props) {
  const {brand, category} = useParams();
  useEffect(() => {
    console.log(props);
  },[])
  return (
    <div>
      FilterPage
    </div>
  );
}
