import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import OrnekUrunler from "@/components/OrnekUrunler/OrnekUrunler";

export default function Home() {
  return (
    <div>
      <Slider />
      <OrnekUrunler />
    </div>
  );
}
