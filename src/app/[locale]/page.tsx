import { Contact } from "lucide-react";
import Benefits from "../components/trangchu/Benefits";
import Customers from "../components/trangchu/Customers";
import FeatureStrip from "../components/trangchu/FeatureStrip";
import Hero from "../components/trangchu/Hero";
import PosSlider from "../components/trangchu/PosSlider";
import Solutions from "../components/trangchu/Solutions";
import Support from "../components/trangchu/Support";
import WebsiteDesign from "../components/trangchu/WebsiteDesign";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      <FeatureStrip />
      <PosSlider />
      <Solutions />
      <Benefits />
      <WebsiteDesign />
      <Customers />
      <Support />
      <Contact />
    </main>
  );
}
