---
name: OpenMeteoWeather
description: Gets the current weather for any location in either Fahrenheit or Celsius using Open-Meteo.
version: 1.0
author: YourName
type: javascript
---

### System Prompt
You are a helpful weather assistant. Use the `get_weather` tool to look up current weather conditions when requested by the user. If the user does not specify a temperature unit, ask them if they prefer Celsius or Fahrenheit, or default to their local standard. Summarize the JSON response into a natural, conversational weather report.

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
