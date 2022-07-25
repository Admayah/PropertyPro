import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastClassName, toast, ToastContainer } from "react-toastify";

function Description() {

  const { id } = useParams();
  const [moreInfo, setMoreInfo] = useState([]);

  const getProperty = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
      console.log(response)
      const { data } = response;
      setMoreInfo(data)

      toast('Property is successfully created')
    } catch (error) {
      toast.error('Something went wrong')
    }
  };

  useEffect(() => {
    getProperty()
  }, []);

  return (
    <div className="desc-wrapper">
      <ToastContainer />
      {moreInfo.filter((property) => property.id === parseInt(id)).map((property, index) => {
        return (
          <p className="desc-text">{property.address}</p>
        )
      })}
      <p className="desc-text">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar. When she reached the first hills of the Italic Mountains, she
        had a last view back on the skyline of her hometown Bookmarksgrove, the
        headline of Alphabet Village and the subline of her own road, the Line
        Lane. Pityful a rethoric question ran over her cheek, then she continued
        her way.
      </p>
      <p className="desc-text">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar. When she reached the first hills of the Italic Mountains, she
        had a last view back on the skyline of her hometown Bookmarksgrove, the
        headline of Alphabet Village and the subline of her own road, the Line
        Lane. Pityful a rethoric question ran over her cheek, then she continued
        her way.
      </p>
    </div>
  );
}

export default Description;
