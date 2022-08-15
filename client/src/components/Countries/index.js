import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Grid";



function countryList() {
  
  return [
    {
      countryName: "Japan",
      description:
        "Japan is the most technologically advanced country in the world in 2022. This country is popular for breathtaking and innovative inventions and scientific research. Without a doubt, Japan is also one of the best countries that have made massive returns to investments in research.  Most of their inventions are the results of extensive and robust scientific research.",
      capital: "Tokyo",
      Flag: "🇯🇵",
      image: require("../../images/countries/tokyo.jpg"),
      visa: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    },
    {
      countryName: "United States",
      description:
        "In addition to having one of the most advanced technology in the world, the United States also has one of the best economic systems and military power in the world. This country is home to some of the biggest technology firms in the world such as Google, Facebook, Apple, Intel, IBM, and Microsoft.",
      capital: "Washington D.C",
      Flag: "🇺🇸",
      image: require("../../images/countries/washington.jpg"),
      visa: "https://travel.state.gov/content/travel/en/us-visas.html",
    },
    {
      countryName: "South Korea",
      description:
        "South Korea ranks as the third most technologically advanced country in the world. The country is one of the world’s leaders in the cars and smartphones industry.South Korea is home to giant technology companies, including Samsung, Hyundai, and LG that compete with the best technology brands across the world.",
      capital: "Seoul",
      Flag: "🇰🇷",
      image: require("../../images/countries/seoul.jpg"),
      visa: "https://www.k-eta.go.kr/portal/apply/index.do",
    },
    {
      countryName: "Germany",
      description:
        "This European country is one of the leading countries in many fields. However, it’s mostly popular because of its fantastic automotive industry. The best cars come from Germany. Germany also has the best nanotechnology space science and military technology in Europe.",
      capital: "Berlin",
      Flag: "🇩🇪",
      image: require("../../images/countries/berlin.jpg"),
      visa: "https://www.auswaertiges-amt.de/en/visa-service/-/215870#:~:text=Generally%20speaking%2C%20all%20other%20foreigners,has%20abolished%20the%20visa%20requirement.",
    },
    {
      countryName: "Singapore",
      description:
        "The country has experienced progressive and steady growth in manufacturing and production that have paved the way for a business-friendly environment for investors. It is reported that this country has the fastest internet speed in the world. In addition, Singapore has a very fast-growing science and technology industry and has positioned itself as the technological leader in the Southeast Asian area.",
      capital: "Singapore",
      Flag: "🇸🇬",
      image: require("../../images/countries/singapore.jpg"),
      visa: "https://www.mfa.gov.sg/Overseas-Mission/Washington/Visa-and-Entry-Requirements",
    },
    {
      countryName: "United Kingdom",
      description:
        "London is the financial center of the Uk and one of the most visited places in the world. It is ranked the sixth most technologically advanced country in the world.The UK was about the first country to become industrialized and at that time, it was the most developed country in the world.Jet engines, steam engines, electric motors, light bulbs, and many more, are invented in the country.",
      capital: "London",
      Flag: "🇬🇧",
      image: require("../../images/countries/london.jpg"),
    },
    {
      countryName: "Sweeden",
      description:
        "Sweden is one country with massive economic growth mainly because of the successes of technological firms. Without plenty much ado, Sweden is one of the countries with the greatest achievement in the development of webs and apps. The country is home to several giant tech companies like Ericsson, Skype, Spotify, and Torrent. The contributions from these companies have made the internet easily accessible to the citizens of the country.",
      capital: "Stockholm",
      Flag: "🇸🇪",
      image: require("../../images/countries/stockholm.jpg"),
    },
    {
      countryName: "Australia",
      description:
        "Australia is as varied as it is enormous-- it is home to thriving cities, vast wilderness, and earnest, friendly people. Sydney is for sophisticates, with its famous opera house and annual Sculpture By the Sea outdoor art exhibits. Port Douglas makes a great base for snorkeling or diving the Great Barrier Reef, and quaint lighthouses keep vigil along the beaches of Byron Bay. Melbourne is a hub of rousing cricket activity, and the limestone pillars of the Pinnacles Desert are a natural wonder.",
      capital: "Canberra",
      Flag: "🇦🇺",
      image: require("../../images/countries/australia.webp"),
    },
    {
      countryName: "China",
      description:
        "China has since experienced drastic economic changes in recent years that have resulted in rapid economic development and technological advancements.",
      capital: "Beijing",
      Flag: "🇨🇳",
      image: require("../../images/countries/bejing.jpg"),
    },
    {
      countryName: "Switzerland",
      description:
        "Science and technology have always been the focus of the economy of the country.With the massive investment in research and technology, Switzerland has made itself a force in technology among the community of countries. This country has low unemployment, skilled labour has to be forced, and also it has one of the highest gross domestic products per capita in the world. In fact, this country is one of the countries with the highest salaries in the world and has also been ranked highly as one of the wealthiest countries in the world.",
      capital: "Bern",
      Flag: "🇨🇭",
      image: require("../../images/countries/bern.jpg"),
    },
    {
      countryName: "Mexico",
      description:
        "Mexico is relaxed and friendly. The highways are good, the healthcare is excellent and affordable, and the food is terrific. The immigration system is surprisingly uncomplicated, and long-term living in Mexico is possible for many retirees and remote workers—no lawyers or agents are needed.",
      capital: "Mexico City",
      Flag: "🇨🇲",
      image: require("../../images/countries/Mexico.jpg"),
    },
    {
      countryName: "Thailand",
      description:
        "Bordered with Andaman sea and gulf of Thailand, Thailand is a dream destination for every beach lover. Thailand tourism has everything a tourist could ask for, from an international holiday destination including, Gren-blue clean beaches, coral islands, mountains, shopping markets, Hindu temples, monasteries and never ending nightlife. If you are a sea food lover, then Thailand tour packages is just for you.",
      capital: "Bangkok",
      Flag: "🇹🇭",
      image: require("../../images/countries/Thailand.jpg"),
    },
  ];
}




const Countries = () => {
  return (
    <Box>
      <Grid container spacing={2} className="uk-flex">
        {countryList().map((countries) => (
          <Grid
            item
            sm={6}
            md={4}
            sx={{ flexGrow: 1 }}
            key={countries.countryName}
          >
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCover>
                <img src={countries.image} alt="" />
              </CardCover>

              <CardContent sx={{ justifyContent: "center", gap: 1 }}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  {countries.countryName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Countries;
