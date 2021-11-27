import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import Tooltip from "./components/Tooltip";
import ReactDOM from "react-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-9.2468716, 32.2989255],
      zoom: 12.5,
    });

    const addNode= (node1,node2) => {
      
    map.on("load", () => {
      // Add a data source containing GeoJSON data.
      map.addSource("maine", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            // These coordinates outline Maine.
            coordinates: [getCoords(node1),getCoords(node2)],
          },
        },
      });

      // Add a new layer to visualize the polygon.
      map.addLayer({
        id: `maine`,
        type: "line",
        source: "maine", // reference the data source
        layout: {},
        paint: {
          "fill-color": "#0080ff", // blue color fill
          "fill-opacity": 0.5,
        },
      });
      // Add a black outline around the polygon.
      map.addLayer({
        id: "outline",
        type: "line",
        source: "maine",
        layout: {},
        paint: {
          "line-color": "#fff",
          "line-width": 2,
          "line-dasharray": [2, 2],
          "line-pattern-transition": {
            duration: 0,
          }
        },
      });
    })};

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: 0,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.3168716, 32.2789255],
            icon: "/image/barque.png",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 1,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barqueOn.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.3268716, 32.2289255],
            icon: "/image/barque.png",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 6,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.2968716, 32.2489255],
            icon: "/image/barque.png",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 7,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.3068716, 32.2689255],
            icon: "/image/barque.png",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 2,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.2668716, 32.2989255],
            icon: "/image/barque.png",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 3,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barqueOn.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.2498716, 32.2929255],
          },
        },
        {
          type: "Feature",
          properties: {
            id: 4,
            message: "Bar",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque",
            Rais: "ahmed sabika",
            phone: "0986342344",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.3098716, 32.2929255],
          },
        },
        {
          type: "Feature",
          properties: {
            id: 5,
            message: "Foo",
            iconSize: [30, 30],
            message: "ok",
            icon: "/image/barque.png",
          },
          info: {
            barqueID: "UY34I5YO34U5",
            name: "Barque rissani",
            Rais: "ahmed sabika",
            phone: "0986342344",
            type: "Barque artisanale",
            description: "Barque artisanale",
            coworkers: [
              {
                name: "ayman sohail",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "lotfi majjati",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
              {
                name: "jawad robaaii",
                email: "ayman@gmail.com",
                phone: "067752645645",
              },
            ],
          },
          geometry: {
            type: "Point",
            coordinates: [-9.2568716, 32.3189255],
          },
        },
      ],
    };

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      const img = marker.properties.icon;
      el.className = "marker";
      el.style.backgroundImage = `url(${img})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <h3 style="color:blue; width:100%;text-align:center;"><b>${
        marker.info?.name
      } </b> ${marker.properties.id} </h3>
      <p style="color:black; width:100%;text-align:left;">Rais: ${
        marker.info?.Rais
      }</p>
      <a href="tel:${
        marker.info.phone
      }" style="color:black; width:100%;text-align:left;">Telephone: ${
        marker.info?.phone
      }</a>

      <p style="color:black; width:100%;text-align:left;">Type: ${
        marker.info?.type
      }</p>
      <p style="color:black; width:100%;text-align:left;">Description: ${
        marker.info?.description
      }</p>
      <p style="color:black; width:100%;text-align:left;">Coworkers ${
        marker.info?.coworkers.length
      }:</p>
      <ul style="color:black; width:100%;text-align:left;">
      ${marker.info?.coworkers
        .map((coworker) => `<li>&emsp;-${coworker.name}</li>`)
        .join("")}
      </ul>
      <div class="width:100%; display:flex; justify-content:right;">
          <button class="btn btn-primary" style="width:80%; text-align:center;">Plus d'info</button>
      </div>
    `);

      el.addEventListener("click", (e) => {
        //console log the e.target.offsetLeft and e.target.offsetTop
        console.log(e.target.offsetLeft, e.target.offsetTop);
      });

      // Add markers to the map.
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    }
    // Initialize map when component mounts

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    const getCoords = (arr) => {
      const coordsFiltered = [];
      for (const marker of geojson.features) {
        if (arr.includes(marker.properties.id)) {
          coordsFiltered.push(marker.geometry.coordinates);
        }
      }
      return coordsFiltered;
    };

    const coords = () => {
      //get all coords of the markers
      const coords = [];
      for (const marker of geojson.features) {
        coords.push(marker.geometry.coordinates);
      }
      return coords;
    };
    
    addNode([2,5,4,3,0],[1,6,7]);

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", () => {
      map.getCanvas().style.cursor = "";
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
