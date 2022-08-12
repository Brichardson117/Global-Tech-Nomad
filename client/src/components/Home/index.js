import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

function countryList() {
  return [
    {
      countryName: "Japan",
      description:
        "Japan is the most technologically advanced country in the world in 2022. This country is popular for breathtaking and innovative inventions and scientific research. Without a doubt, Japan is also one of the best countries that have made massive returns to investments in research.  Most of their inventions are the results of extensive and robust scientific research.",
      capital: "Tokyo",
      Flag: "🇯🇵",
      image: require("../../images/countries/tokyo.jpg"),
    },
    {
      countryName: "United States",
      description:
        "In addition to having one of the most advanced technology in the world, the United States also has one of the best economic systems and military power in the world. This country is home to some of the biggest technology firms in the world such as Google, Facebook, Apple, Intel, IBM, and Microsoft.",
      capital: "Washington D.C",
      Flag: "🇺🇸",
      image: require("../../images/countries/washington.jpg"),
    },
    {
      countryName: "South Korea",
      description:
        "South Korea ranks as the third most technologically advanced country in the world. The country is one of the world’s leaders in the cars and smartphones industry.South Korea is home to giant technology companies, including Samsung, Hyundai, and LG that compete with the best technology brands across the world.",
      capital: "Seoul",
      Flag: "🇰🇷",
      image: require("../../images/countries/seoul.jpg"),
    },
    {
      countryName: "Germany",
      description:
        "This European country is one of the leading countries in many fields. However, it’s mostly popular because of its fantastic automotive industry. The best cars come from Germany. Germany also has the best nanotechnology space science and military technology in Europe.",
      capital: "Berlin",
      Flag: "🇩🇪",
      image: require("../../images/countries/berlin.jpg"),
    },
    {
      countryName: "Singapore",
      description:
        "The country has experienced progressive and steady growth in manufacturing and production that have paved the way for a business-friendly environment for investors. It is reported that this country has the fastest internet speed in the world. In addition, Singapore has a very fast-growing science and technology industry and has positioned itself as the technological leader in the Southeast Asian area.",
      capital: "Singapore",
      Flag: "🇸🇬",
      image: require("../../images/countries/singapore.jpg"),
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
      countryName: "Israel",
      description:
        "Although Israel isn’t a very big country, it outshines most countries when it comes to advancement in technology. How can that even be possible? Well, you must know that the Jewish nation is popular for its innovations in the agricultural and defense industry. Also, the country is one of the leading countries in the field of space science.",
      capital: "Jerusalem",
      Flag: "🇮🇱",
      image: require("../../images/countries/jerusalem.webp"),
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
  ];
}

function HomeMap() {
  return (
    <section>
      <h2>Countries</h2>
      <section>
   <div className="uk-child-width-1-2@m" uk-grid>
        {countryList().map((country) => (
          <div className="uk-child-width-1-2@m" uk-grid>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img
                  src={country.image}
                  width="900"
                  height="900"
                  alt={country.countryName}
                />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">{country.countryName}{country.Flag}</h3>
                <p>{country.description}</p>
                <h4><strong>Capital:</strong>{country.capital}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      </section>
   
    </section>
  );
}

export default HomeMap;
