export interface AirQualityData {
    aqi: number;
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
    so2: number;
    co: number;
    location: string;
}

export const pmLocationData: { [key: string]: AirQualityData } = {
    "Bangkok": {
        aqi: 101,
        pm25: 35.5,
        pm10: 54,
        o3: 26,
        no2: 21,
        so2: 2,
        co: 0.9,
        location: "Bangkok, Thailand"
    },
    "Chiang Mai": {
        aqi: 76,
        pm25: 24.1,
        pm10: 39,
        o3: 35,
        no2: 15,
        so2: 1,
        co: 0.7,
        location: "Chiang Mai, Thailand"
    },
    "Phuket": {
        aqi: 42,
        pm25: 10.1,
        pm10: 22,
        o3: 42,
        no2: 8,
        so2: 1,
        co: 0.4,
        location: "Phuket, Thailand"
    },
    "Pattaya": {
        aqi: 68,
        pm25: 20.2,
        pm10: 35,
        o3: 31,
        no2: 18,
        so2: 2,
        co: 0.6,
        location: "Pattaya, Thailand"
    }
};

export const getAirQualityData = (location: string): AirQualityData | undefined => {
    return pmLocationData[location];
};