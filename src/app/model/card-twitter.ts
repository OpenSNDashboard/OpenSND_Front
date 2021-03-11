export interface CardTwitter {
  id: string;
  user: User;
  created_at: string;
  favorite_count: number;
  retweet_count: number;
  text: string;
  retweeted_status: CardTwitter | undefined | null | {};
  quoted_status: CardTwitter | undefined | null | {};
  user_mentions: UserMention[];
  urls: string[];
  hashtags: string[];
  medias: Media[];
}

interface User {
  id: string;
  name: string;
  screen_name: string;
  profile_image_url: string;
  verified: boolean;
}

interface UserMention {
  id: string;
  name: string;
  screen_name: string;
}

interface Media {
  url: string;
  type: string;
}
