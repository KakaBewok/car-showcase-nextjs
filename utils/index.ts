import { CarProps } from "@/types";

export const fetchCars = async () => {
    const headers = {
        'X-RapidAPI-Key': '34771fac2cmsh34f1a60ae1fdc2dp1c412ejsnd02e7e09517e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=bmw', { headers });

      const result = await response.json();

      return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}