import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
    from: string;
    to: string;
}

const Map: React.FC<MapProps> = ({from, to}) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
    const [toCoords, setToCoords] = useState<[number, number] | null>(null);
    const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || "Missing Mapbox token!";
    mapboxgl.accessToken = accessToken;
    
    const fitMapToBounds = (fromCoords: [number, number], toCoords: [number, number]) => {
        if (!map.current) return;

        try {
            const bounds = new mapboxgl.LngLatBounds()
                .extend(fromCoords)
                .extend(toCoords);

            map.current.fitBounds(bounds, {
                padding: {top: 20, bottom: 20, left: 20, right: 20},
                maxZoom: 12,
                duration: 1000
            });
        } catch (error) {
            console.error('Error setting map bounds:', error);
        }
    };

    // Function to get coordinates from location name
    const getCoordinates = async (location: string): Promise<[number, number] | null> => {
        try {
            const geocodingEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                location
            )}.json?access_token=${accessToken}`;

            const response = await fetch(geocodingEndpoint);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
                const [lng, lat] = data.features[0].center;
                return [lng, lat];
            }
            return null;
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }
    };

    // Initialize map
    useEffect(() => {
        if (!mapContainer.current) return;

        // Default to a world view if no specific coordinates are available
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [0, 0],
            zoom: 1.5,
        });

        // this is the fit bounds function that will be called when the map is loaded
        map.current.on('load', () => {
            if (fromCoords && toCoords) {
                fitMapToBounds(fromCoords, toCoords);
            }
        });

        return () => {
            if (map.current) {
                map.current.remove();
            }
        };
    }, [fromCoords, toCoords]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const fromResult = await getCoordinates(from);
                const toResult = await getCoordinates(to);

                // Only update if both coordinates are valid
                if (fromResult && toResult) {
                    setFromCoords(fromResult);
                    setToCoords(toResult);

                    if (map.current && map.current.loaded()) {
                        setTimeout(() => {
                            fitMapToBounds(fromResult, toResult);
                        }, 100);
                    }
                } else {
                    setFromCoords(null);
                    setToCoords(null);
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
                setFromCoords(null);
                setToCoords(null);
            }
        };

        fetchCoordinates().then(() => {
        });
    }, [from, to]);

    useEffect(() => {
        if (!map.current || !fromCoords || !toCoords) return;

        if (fromCoords.some(coord => isNaN(coord) || !isFinite(coord)) ||
            toCoords.some(coord => isNaN(coord) || !isFinite(coord))) {
            return;
        }

        new mapboxgl.Marker({color: '#F3D34A'})
            .setLngLat(fromCoords)
            .addTo(map.current);

        new mapboxgl.Marker({color: '#000'})
            .setLngLat(toCoords)
            .addTo(map.current);

        fitMapToBounds(fromCoords, toCoords);

        setTimeout(() => {
            if (map.current) {
                map.current.resize();
            }
        }, 100);

        const drawRoute = async () => {
            try {
                if (fromCoords.some(coord => isNaN(coord) || !isFinite(coord)) ||
                    toCoords.some(coord => isNaN(coord) || !isFinite(coord))) {
                    return;
                }

                const response = await fetch(
                    `https://api.mapbox.com/directions/v5/mapbox/walking/${fromCoords[0]},${fromCoords[1]};${toCoords[0]},${toCoords[1]}?geometries=geojson&access_token=${accessToken}`
                );
                const data = await response.json();

                if (data.routes && data.routes.length > 0) {
                    const route = data.routes[0].geometry;
                    if (map.current) {
                        if (map.current.getSource('route')) {
                            (map.current.getSource('route') as mapboxgl.GeoJSONSource).setData({
                                type: 'Feature',
                                properties: {},
                                geometry: route
                            });
                        } else {
                            map.current.addSource('route', {
                                type: 'geojson',
                                data: {
                                    type: 'Feature',
                                    properties: {},
                                    geometry: route
                                }
                            });

                            map.current.addLayer({
                                id: 'route',
                                type: 'line',
                                source: 'route',
                                layout: {
                                    'line-join': 'round',
                                    'line-cap': 'round'
                                },
                                paint: {
                                    'line-color': '#3887be',
                                    'line-width': 5,
                                    'line-opacity': 0.75
                                }
                            });
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching route:', error);
            }
        };

        drawRoute().then(() => {});
    }, [fromCoords, toCoords]);

    // Add resize observer to handle container size changes
    useEffect(() => {
        if (!mapContainer.current || !map.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (map.current) {
                map.current.resize();
                
                if (fromCoords && toCoords) {
                    fitMapToBounds(fromCoords, toCoords);
                }
            }
        });

        resizeObserver.observe(mapContainer.current);

        return () => {
            if (mapContainer.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                resizeObserver.unobserve(mapContainer.current);
            }
        };
    }, [fromCoords, toCoords]);

    return (
        <div
            ref={mapContainer}
            style={{
                width: '100%',
                height: '100%',
                minHeight: '90px',
                minWidth: '200px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px'
            }}
        />
    );
};

export default Map;
