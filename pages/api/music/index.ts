import type { NextApiRequest, NextApiResponse } from 'next'
var SpotifyWebApi = require('spotify-web-api-node');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const accessToken = (await spotifyApi.clientCredentialsGrant()).body['access_token'];
  
  await spotifyApi.setAccessToken(accessToken);
  
  const _albums = (await spotifyApi.getArtistAlbums(process.env.SPOTIFY_ARTIST_ID)).body.items || [];
  const albums = _albums.map((album: any) => ({
    id: album.id,
    name: album.name,
    image: album.images[0].url,
    url: album.external_urls.spotify
  })) || [];

  return res.status(200).json(albums);
}
