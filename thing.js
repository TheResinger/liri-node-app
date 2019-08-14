var json = {
  href:
    "https://api.spotify.com/v1/search?query=No+Less+Violent&type=track&offset=0&limit=20",
  items: [
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6BD4lgmnh4vy6kkCaZRDWt"
            },
            href: "https://api.spotify.com/v1/artists/6BD4lgmnh4vy6kkCaZRDWt",
            id: "6BD4lgmnh4vy6kkCaZRDWt",
            name: "Bury Tomorrow",
            type: "artist",
            uri: "spotify:artist:6BD4lgmnh4vy6kkCaZRDWt"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/00DQxO6RTdm2gvlcpjlOzt"
        },
        href: "https://api.spotify.com/v1/albums/00DQxO6RTdm2gvlcpjlOzt",
        id: "00DQxO6RTdm2gvlcpjlOzt",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/3ab644012e680c835230d6135439109daeb8bb5a",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/091912fe4992056bc91adacecfa12480afbd0445",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/b3a96f423327e36656d84f7ded4d2af3c97cb2a0",
            width: 64
          }
        ],
        name: "Black Flame",
        release_date: "2018-07-13",
        release_date_precision: "day",
        total_tracks: 10,
        type: "album",
        uri: "spotify:album:00DQxO6RTdm2gvlcpjlOzt"
      }
    }
  ]
};

for (var i = 0; i < json.items.length; i++) {
  console.log(
    "Type: " +
      json.items.album.artists.name
  );
}
