"use client";

import Image from "next/image";
import { CarCard, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("2022");
  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const results = await fetchCars({
        manufacturer,
        year,
        fuel,
        limit,
        model,
      });
      setAllCars(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="w-full mt-16 flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading..."
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            {/* <h2 className="text-xl font-bold text-black">Oops, no results</h2> */}

            {loading && (
              <div className="w-full mt-16 flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading..."
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
