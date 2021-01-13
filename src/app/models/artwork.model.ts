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
  tags?: string[];
  displayType?: 'minor' | 'major';
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


// TODO: featured: boolean??? Or set featured work/s dynamically in a featured component.
