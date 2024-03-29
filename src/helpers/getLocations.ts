'use server'

export async function getLocations() {
 
        const res = await fetch('https://api.meteo.lt/v1/places');

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        const dataOnlyPlaceCode = data.map((item: any) => item.code).filter((item: string[]) => !item.includes('-'));
        return dataOnlyPlaceCode;
}