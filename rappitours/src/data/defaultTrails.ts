import { v4 as uuidv4 } from "uuid";

export default function DefaultTrails() {
    return [
        {
            name: "Morning Hike",
            id: uuidv4(),
            timedate: new Date(Date.now() + 60 * 2000).toISOString(),
            from: "Berlin, Germany",
            to: "Leipzig, Germany"
        },
        {
            name: "River Walk",
            id: uuidv4(),
            timedate: new Date(Date.now() + 60 * 1000).toISOString(),
            from: "Pl. Charles de Gaulle, 75008 Paris, France",
            to: "Av. Gustave Eiffel, 75007 Paris, France"
        },
        {
            name: "Sunset Trail",
            id: uuidv4(),
            timedate: new Date().toISOString(),
            from: "Av. Brasília, 1400-038 Lisboa, Portugal",
            to: "Vatican City"
        }
    ];
}
