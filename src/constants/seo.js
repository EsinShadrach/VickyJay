const image =
  "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover_xhnhes.png";
const creator = "Rafe";
const author = creator;

export const url = (slug) => {
  return `https://rafe-esin.com/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "Rafe - Creative Frontend Engineer",
    description:
      "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  },
};
