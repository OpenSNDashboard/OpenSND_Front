export interface CardReddit {
  // Exemple :
  id: string; // "id": "lp8jjm"
  author: string; // "author": "00plebian",
  author_id: string; // "author_id": "ij3joh3",
  sub_id: string; // "sub_id": "2r05i",
  sub_display_name: string; // "sub_display_name": "Minecraft",
  title: string; // "title": "We played a multiplayer hardcore realm during corona, where any time any person died we reset the world. Here's how we did!",
  created_at: string; // "created_utc": 1613947102.0, seconds epoch
  selftext: string; // "selftext": "",
  permalink: string; // "permalink": "/r/Minecraft/comments/lp8jjm/we_played_a_multiplayer_hardcore_realm_during/", rajouter https://reddit.com pour obtenir l'url complete
  url: string; // "url": "https://i.redd.it/nyepklg2rwi61.png",
  is_self: boolean; // "is_self": False,
  is_oc: boolean; // "is_oc": False,
  is_nsfw: boolean; // "is_nsfw": False,
  is_spoiler: boolean; // "is_spoiler": False,
  upvotes: number; // "upvotes": 116180,
  ratio: number; // "ratio": 0.93,
  comments: number; // "comments": 1828
}
