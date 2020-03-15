import axios from 'axios';

export function getAPOD(date= '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=Y7iPiQwOXUafheqieQIBbyljtFh2heDc9FY38nZ8&date=${date}`);
}
