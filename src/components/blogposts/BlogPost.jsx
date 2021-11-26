import React from "react";
import Properties from "./Properties";
import "./blogpost.css";

export default function BlogPost() {
  return (
    <div className="blogpostContainer">
      <div class="blog_cardWrapper">
        {Properties.map((item) => {
          return (
            <div class="propertyContent">
              <div className="propertyImage"> <img src={item.img}alt="" className="propertyImg" width="100" height="50"/></div>
             
              <div className="propertyDetails">{item.location}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// trusted
// high quality tenant Selection
// easy finance
// safe and secure


// {/* <div class="blog_card_content">
//   <h3>Here Comes The Blog Title.</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
//     provident voluptatem.
//   </p>
//   <a href="https://abhishekdana1999.github.io/Mywebsite/blog/login-page.html">
//     <h6>Read More</h6>
//   </a>
// </div>
// <div class="blog_card_content">
//   <h3>Here Comes The Blog Title.</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
//     provident voluptatem.
//   </p>
//   <a href="https://abhishekdana1999.github.io/Mywebsite/blog/login-page.html">
//     <h6>Read More</h6>
//   </a>
// </div> */}
//       {/* </div>
//     </div> */}
// //   );
// // }
