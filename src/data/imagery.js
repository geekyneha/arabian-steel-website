const unsplash = (photo, width = 1800) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;

export const IMAGES = {
  hero: unsplash("photo-1516937941344-00b4e0337589", 2400),
  workshop: unsplash("photo-1504917595217-d4dc5ebe6122", 1500),
  engineering: unsplash("photo-1581092160562-40aa08e78837", 1200),
  structure: unsplash("photo-1504307651254-35680f356dfd", 1200),
  tanks: unsplash("photo-1567789884554-0b844b597180", 1200),
  process: unsplash("photo-1531834685032-c34bf0d84c77", 1200),
  maintenance: unsplash("photo-1581091226825-a6a2a5aee158", 1200),
};
