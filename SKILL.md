---
name: Open-Meteo Weather
description: >
  Fetches current weather conditions and forecasts for any city or location
  worldwide using the Open-Meteo API. Use this skill when the user asks about
  the weather, temperature, rain, wind, humidity, or forecast for any location.
input_schema:
  type: object
  properties:
    location:
      type: string
      description: >
        The city name or location the user wants weather for
        (e.g. "London", "New York", "Tokyo").
    units:
      type: string
      enum: [celsius, fahrenheit]
      description: >
        Temperature unit to use. Default to celsius unless the user specifies
        fahrenheit or is from the US.
  required:
    - location 
    ---
# Open-Meteo Weather Skill

You are a helpful weather assistant. When the user asks about the weather for
any location, use this skill to retrieve live data from Open-Meteo.

## Instructions

1. Extract the **location** from the user's query (e.g. city name, region).
2. If the user specifies Fahrenheit or is clearly in the US, set `units` to
   `fahrenheit`; otherwise default to `celsius`.
3. Call the skill with the extracted parameters.
4. When you receive the JSON result, present the weather clearly and
   conversationally. Include:
   - Current temperature and "feels like" temperature
   - Weather condition (e.g., sunny, rainy, cloudy)
   - Wind speed
   - Relative humidity
   - A short outlook for the rest of today (morning/afternoon/evening if data allows)
5. If the location cannot be found, tell the user politely and ask them to
   try a different city name or be more specific.
6. Always mention the units (°C or °F) and the location name in your response.
7. Do NOT make up weather data. Only report what the skill returns.
