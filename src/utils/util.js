const getData = async () => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=6078affb6cb911d495ce820cdc4b8eeb&units=metric"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
