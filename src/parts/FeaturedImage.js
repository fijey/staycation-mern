import React, { useEffect } from "react";
import AOS from "aos";

export default function FeaturedImage({ data }) {
  useEffect(() => {
    AOS.init();
  }, [])

  console.log("isi data featured image", data)
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
              data-aos="fade" data-aos-delay={index * 500}
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${item.url}`}
                    alt={item._id}
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
