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
            from: "WR33+XH3, TIFR, Old Navy Nagar, Colaba, Mumbai, Maharashtra 400005, India",
            to: "4RV4+75C, versova jetty, Mandvi Galli, Versova, Andheri West, Mumbai, Maharashtra 400061, India"
        }
    ];
}
