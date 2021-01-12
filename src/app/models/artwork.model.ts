export interface ArtWork {
  id: string;
  url: string;
  title: string;
  blurb: string;
  description?: string[];
  images?: string[];
  // TODO: check youTube type
  youTube?: string;
  pubdate: string;
  tech: string;
  displayGroup?: string;
  collaborators?: string;
  publisher?: string;
  moreinfo?: string;
  awards?: Award[];
  accolades?: Accolade[];
}

interface Accolade {
  name: string;
  url: string;
}

interface Award {
  name: string;
  url: string;
}


// NOTE: displayGroup: e.g. elit/oot/remixworx/movingpix.

// TODO: featured: boolean??? Or set featured work/s dynamically in a featured component.
