import { reactive } from 'vue'

export const store = reactive({
    url : "https://api.openbrewerydb.org/v1/breweries?by_country=austria&per_page=10",
    beers : [],
});