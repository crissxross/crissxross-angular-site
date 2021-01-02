export interface ArtWork {
  id: string;
  workUrl: string;
  title: string;
  description: string;
  imageUrl: string;
  pubdate: string;
  tech: string;
  displayType: 'featured' | 'list';
  collab?: string;
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


// TODO: add/change description to short description + long description. Add type (e.g. elit/oot/remixworx/movingpix). Change displayType to featured: boolean. Change collab to collaborators: string | string[]
