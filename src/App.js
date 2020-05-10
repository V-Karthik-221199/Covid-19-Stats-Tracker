import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImage from "./images/covid-19.png";

import Particles from "react-particles-js";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImage} className={styles.image} alt="COVID-19" />
        <Particles
          className={styles.particles}
          params={{
            particles: {
              number: {
                value: 8,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 1,
                out_mode: "out",
              },
              shape: {
                type: ["image"],
                image: [
                  {
                    src:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",
                    height: 20,
                    width: 23,
                  },
                  {
                    src:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",
                    height: 20,
                    width: 20,
                  },
                  {
                    src:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",
                    height: 20,
                    width: 20,
                  },
                ],
              },
              color: {
                value: "#FF0000",
              },
              size: {
                value: 30,
                random: false,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 10,
                  sync: false,
                },
              },
            },
            retina_detect: false,
          }}
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
