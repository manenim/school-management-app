"use client";

import Hero from "@/components/hero";
import styles from "../../styles";
import HomeHeader from "@/components/homeHeader";
// import "./globals.css";


export default function HomePage() {
  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <section className="">
        <div className={`bg-blue-500 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </section>
    </div>
  );
}
