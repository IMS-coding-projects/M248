import { v4 as uuidv4 } from "uuid";

export default function DefaultTrails() {
return [
  {
    name: "Morning Hike",
    id: uuidv4(),
    timedate: new Date().toISOString(),
    from: "London",
    to: "Windsor"
  },
  {
    name: "River Walk",
    id: uuidv4(),
    timedate: new Date().toISOString(),
    from: "Paris",
    to: "Versailles"
  },
  {
    name: "Sunset Trail",
    id: uuidv4(),
    timedate: new Date().toISOString(),
    from: "Moskau",
    to: "Kremlin"
  }
];
}