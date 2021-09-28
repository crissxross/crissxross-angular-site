export interface ArtWork {
  id: string;
  url: string;
  title: string;
  blurb?: string;
  description?: string[];
  youtubeVideos?: Video[];
  images?: string[];
  pubdate?: string;
  tech?: string;
  tags?: string[];
  displayType?: 'minor' | 'major' | 'wip';
  collaborators?: string;
  publisher?: string;
  moreinfo?: string;
  awards?: Award[];
  accolades?: Accolade[];
}

export interface Video {
  id: string;
  name: string;
}

interface Accolade {
  name: string;
  url: string;
}

interface Award {
  name: string;
  url: string;
}

