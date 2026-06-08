export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { niche } = req.query;
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(niche)}&type=video&order=viewCount&maxResults=10&key=${API_KEY}`
  );
  
  const data = await response.json();
  res.json(data);
}
