import {getCurrentWeather} from "./weather";
import {getLocation} from "./location";
import {getGeocoding} from "./geocoding";

export const tools = [
    {
        type: 'function',
        function: {
            name: 'getLocation',
            description: 'Fetches the location data of the user based on their IP address.',
            parameters: {
                type: 'object',
                properties: {}
            }
        }
    },
    {
        type: 'function',
        function:{
            name: 'getCurrentWeather',
            description: 'Fetches the current weather data for a given location.',
            parameters: {
                type: 'object',
                properties: {
                    latitude: { type: 'string' },
                    longitude: { type: 'string' },
                }
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'getGeocoding',
            description: 'Fetches geocoding data for a given place. If the place name is not in English, it will be translated to English before input it.',
            parameters: {
                type: 'object',
                properties: {
                    place: { type: 'string' }
                }
            }
        }
    },
   
]

export const availableTools: {[key:string]: Function} = {
    'getLocation': getLocation,
    'getCurrentWeather': getCurrentWeather,
    'getGeocoding': getGeocoding,
}