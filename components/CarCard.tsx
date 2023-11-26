"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import Button from "./Button";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return <div>CarCard {model}</div>;
};

export default CarCard;
