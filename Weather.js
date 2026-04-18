/**
 * Fetches weather data using the Open-Meteo API.
 * Triggered by the Google AI Edge Agent.
 */
async function get_weather(args) {
    const location = args.location;
    const unit = args.unit.toLowerCase() === 'fahrenheit' ? 'fahrenheit' : 'celsius';

    try {
        // Step 1: Geocode the city name to get Lat/Long
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();
        
        if (!geoData.results || geoData.results.length === 0) {
            return JSON.stringify({ error: `Location not found: ${location}` });
        }
        
        const { latitude, longitude, name, country } = geoData.results[0];

        // Step 2: Get current weather from coordinates
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${unit}`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();
        
        const current = weatherData.current_weather;
        
        // Step 3: Package the data for the LLM
        return JSON.stringify({
            location: `${name}, ${country}`,
            temperature: current.temperature,
            unit: unit === 'fahrenheit' ? '°F' : '°C',
            windspeed: current.windspeed,
            condition_code: current.weathercode
        });
        
    } catch (error) {
        return JSON.stringify({ error: "Failed to connect to weather service." });
    }
}
