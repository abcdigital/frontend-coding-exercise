import React from "react";
import { ResultsList } from "./components/ResultsList/ResultsList";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import "./App.css";

const API_URL = "http://localhost:8010/proxy/suburbs.json?q=";

const API_SAMPLE = [
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } }
];

export default function App() {
  return (
    <section>
      TODO: Implement a suburb autocomplete using &lt;Input /&gt;,
      &lt;ResultsList /&gt; and &lt;Button /&gt; and data provided by the{" "}
      <a href="http://localhost:8010/proxy/suburbs.json?q=Syd">API</a>.
    </section>
  );
}
