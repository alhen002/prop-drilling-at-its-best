import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialState = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Porch",
    isOn: false,
  },
  {
    id: 6,
    name: "Garage",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Büro",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialState);

  function onHandleToggle(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function onHandleSetOnAll() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: true })));
  }

  function onHandleSetOffAll() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: false })));
  }

  const lightsOn = lights.filter((light) => light.isOn).length;

  return (
    <Layout isDimmed={lightsOn === lights.length}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightsOn={lightsOn}
        onHandleToggle={onHandleToggle}
        onHandleSetOnAll={onHandleSetOnAll}
        onHandleSetOffAll={onHandleSetOffAll}
      />
    </Layout>
  );
}
