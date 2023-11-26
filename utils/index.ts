export const fetchCars = async () => {
    const headers = {
        'X-RapidAPI-Key': '34771fac2cmsh34f1a60ae1fdc2dp1c412ejsnd02e7e09517e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=bmw', { headers });

      const result = await response.json();

      return result;
}