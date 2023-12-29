import React from "react";
const news = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
function News() {
  return (
    <section className="flex flex-col bg-neutral-900 px-6 py-10 justify-between max-md:gap-5">
      <h1 className="text-3xl font-bold text-primary-orange">New</h1>
      {news.map((item) => (
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white hover:text-primary-orange cursor-pointer">
            {item.title}
          </h1>
          <p className="text-neutral-300">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default News;
