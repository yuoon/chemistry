// Local dev proxy: mirrors Open-Meteo + Frankfurter response shapes.
// In production (GitHub Pages) the browser hits the real APIs directly.
import http from 'http';

const PORT = 8766;

// ── Realistic Lisbon late-May data ────────────────────────────────────────────

const WEATHER_CURRENT = {
  current: {
    time: new Date().toISOString(),
    temperature_2m: 23.4,
    apparent_temperature: 22.1,
    weather_code: 1,          // mainly clear
    wind_speed_10m: 14.2,
  }
};

const WX_CODES  = [0, 1, 0, 2, 1, 0, 0, 1];  // sunny with one partly-cloudy day
const WX_MAX    = [24, 25, 23, 22, 25, 26, 27, 26];
const WX_MIN    = [16, 17, 16, 15, 17, 18, 18, 17];
const WX_RAIN   = [5, 10, 20, 30, 10, 5, 5, 5];
const TRIP_DAYS = ['2026-05-30','2026-05-31','2026-06-01','2026-06-02','2026-06-03','2026-06-04','2026-06-05','2026-06-06'];

const WEATHER_FORECAST = {
  daily: {
    time: TRIP_DAYS,
    temperature_2m_max: WX_MAX,
    temperature_2m_min: WX_MIN,
    weather_code: WX_CODES,
    precipitation_probability_max: WX_RAIN,
  }
};

const RATES = {
  amount: 1,
  base: 'EUR',
  date: new Date().toISOString().split('T')[0],
  rates: { GBP: 0.8523, USD: 1.0841, JPY: 162.34, AUD: 1.6712, CHF: 0.9342 }
};

// ── Server ────────────────────────────────────────────────────────────────────

const ROUTES = {
  '/api/weather/current':  WEATHER_CURRENT,
  '/api/weather/forecast': WEATHER_FORECAST,
  '/api/rates':            RATES,
};

http.createServer((req, res) => {
  const path = req.url.split('?')[0];
  const data = ROUTES[path];
  if (data) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`proxy :${PORT}`));
