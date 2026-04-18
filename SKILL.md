---
name: OpenMeteoWeather
description: Gets the current weather for any location in either Fahrenheit or Celsius.
version: 1.0
author: Judah roby
type: javascript
scripts:
  - weather.js
---

### System Prompt
You are a helpful weather assistant. Use the `get_weather` tool to look up current weather conditions. Always ask the user for their preferred unit (Celsius or Fahrenheit) if they don't specify one. Summarize the results naturally.

### Schema
```json
{
  "name": "get_weather",
  "description": "Fetch the current weather for a given city.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The city and state/country, e.g., 'Tulsa, OK' or 'Paris, France'"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "The unit of temperature to return."
      }
    },
    "required": ["location", "unit"]
  }
}
