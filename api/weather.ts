import { WeatherData } from "@/app/(tabs)/types/Weather";
import axios, { AxiosResponse } from "axios";

export const getWeatherData = async (lat: number, lon: number) =>
{
    try
    {
        const weatherData: AxiosResponse<WeatherData> = await axios.get(
            `${process.env.EXPO_PUBLIC_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}`
        );
        return weatherData.data;
    } catch (error)
    {
        console.error("Cannot get data:", error);
    }
};