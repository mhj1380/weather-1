


type WeatherCategory = 'rainy' | 'snowy' | 'sunny' | 'cloudy';

export function categorizeWeather(dayNightDescription: string): WeatherCategory {
	// 
	dayNightDescription = dayNightDescription.toLowerCase();
	
	// Define categories based on keywords
	if (dayNightDescription.includes("rain") || dayNightDescription.includes("drizzle") || dayNightDescription.includes("thunder")) {
		return 'rainy';
	} else if (dayNightDescription.includes("snow") || dayNightDescription.includes("sleet") || dayNightDescription.includes("ice pellets")) {
		return 'snowy';
	} else if (dayNightDescription.includes("clear") || dayNightDescription.includes("sunny")) {
		return 'sunny';
	} else {
		return 'cloudy';
	}
}

