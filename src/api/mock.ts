interface Response {
  question: string;
  all_words: string[];
  good_words: string[];
}

export const animals: Response = {
  question: "select animals",
  all_words: [
    "hole",
    "sofa",
    "pear",
    "tiger",
    "oatmeal",
    "square",
    "nut",
    "cub",
    "shirt",
    "tub",
    "passenger",
    "cow",
  ],
  good_words: ["tiger", "cow"],
};

export const colors: Response = {
  question: "select colors",
  all_words: [
    "jeans",
    "existence",
    "ink",
    "red",
    "blue",
    "yellow",
    "laugh",
    "behavior",
    "expansion",
    "white",
    "black",
    "cakes",
  ],
  good_words: ["red", "blue", "yellow", "white", "black"],
};

export const vehicles: Response = {
  question: "select vehicles",
  all_words: [
    "belief",
    "wire",
    "car",
    "bus",
    "star",
    "river",
    "hat",
    "skirt",
    "train",
  ],
  good_words: ["car", "bus", "train"],
};
