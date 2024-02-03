import React from "react";

const Products = () => {
  return (
    <>
      <section className="bg-gray-2 dark:bg-dark pb-10 pt-20 lg:pb-20 lg:pt-[12px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="/assets/industry1.jpg"
              CardTitle="Poly sheets"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="/assets/industry2.jpg"
              CardTitle="Poly Bags"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="/assets/industry3.jpg"
              CardTitle="Polybags packaging and more"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}: any) => {
  return (
    <>
      {/*  */}
      <div className="shadow-1 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 bg-primary-foreground mb-10 overflow-hidden rounded-lg shadow-md duration-300">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-body-color dark:text-dark-6 mb-7 text-base leading-relaxed">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="border-gray-3 text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6 inline-block rounded-full border px-7 py-2 text-base font-medium transition hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
