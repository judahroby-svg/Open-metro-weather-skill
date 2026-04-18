---
name: OpenMeteoWeather
description: Gets current weather via Open-Meteo API.
version: 1.0
author: Judah roby
type: javascript
scripts:
  - weather.js
---
### System Prompt
You are a weather assistant. Use the `get_weather` tool to retrieve data. Always confirm if the user wants Celsius or Fahrenheit.

### Schema
```json
{
  "name": "get_weather",
  "description": "Fetch current weather for a city.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": { "type": "string", "description": "City name" },
      "unit": { "type": "string", "enum": ["celsius", "fahrenheit"] }
    },
    "required": ["location", "unit"]
  }
}
