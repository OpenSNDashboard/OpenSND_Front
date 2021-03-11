import { CardReddit } from './card-reddit';
import { CardTwitter } from './card-twitter';

export interface PostInfo {
  type: String; //"reddit" ou "twitter"
  post: CardReddit | CardTwitter;
}
