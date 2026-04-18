# Open-metro-weather-skill
# 🌦️ Open-Meteo Weather Skill

A lightweight, on-device weather assistant for the **Google AI Edge Gallery**. This skill allows your local LLM to fetch real-time weather data globally without needing an API key.

## 🚀 Features
* **No API Key Required**: Uses Open-Meteo’s free tier.
* **Global Search**: Includes a geocoding step to find coordinates for any city.
* **Unit Support**: Toggle between Celsius (C) and Fahrenheit (F).
* **Fast & Private**: API calls are made directly from your device.
**Raw link** ' https://raw.githubusercontent.com/judahroby-svg/Open-metro-weather-skill/refs/heads/main/SKILL.md'
---

## 🛠️ Installation

1.  **Create the Skill File**: 
    Create a file named `SKILL.md` and paste the provided skill code (the version with the `---` header and `async function`) into it.
2.  **Open AI Edge Gallery**: 
    Launch the app on your device.
3.  **Import**: 
    * Go to **Agent Skills**.
    * Click **Import Skill** (or the `+` icon).
    * Select your `SKILL.md` file.
4.  **Verify**: 
    Ensure the "OpenMeteoWeather" skill is toggled **ON** in your chat settings.

---

## 💬 How to Use

Simply ask the AI about the weather. It will recognize the intent and trigger the tool automatically.

* *"What's the weather like in New York?"*
* *"Check the temp in Tokyo in Celsius."*
* *"Is it raining in London? Give me the info in Fahrenheit."*

---

## ⚙️ Technical Details

| Component | Description |
| :--- | :--- |
| **Geocoding API** | Converts "City Name" → Latitude/Longitude. |
| **Forecast API** | Fetches `current_weather` using coordinates. |
| **Runtime** | Executes via the Edge Gallery JavaScript sandbox. |

> **Note:** Open-Meteo data is updated hourly. For the best results, ensure your device has an active internet connection when querying.

---

### Pro Tip
If the AI keeps giving you Celsius when you want Fahrenheit, you can update the **System Prompt** inside your `SKILL.md` to say: *"Always default to Fahrenheit unless specified otherwise."*
