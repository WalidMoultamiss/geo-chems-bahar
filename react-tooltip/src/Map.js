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

    
    
    //fetch data from geojson
    fetch("/geojson.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        loadMap(data);
      });
    

    const loadMap = (geojson) => {
      const addNodes = (nodes) => {
        map.on("load", () => {
          // Add a data source containing GeoJSON data.
          map.addSource("maine", {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                // These coordinates outline Maine.
                coordinates: getCoords(nodes),
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
              },
            },
          });
        });
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
        el.style.borderRadius = "100%";
        el.style.border = "1px solid #fff";
        el.style.boxShadow = "0px 0px 5px #000";
        el.style.cursor = "pointer";
        el.style.backgroundSize = "cover";
        //onclick center map
        el.addEventListener("click", () => {
          map.flyTo({
            center: marker.geometry.coordinates,
            zoom: 15,
          });
        });
  
        // el.style.backgroundSize = "100%";
  
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <h3 style="color:blue; width:100%;text-align:center;"><b>${
          marker.info?.name
        } </b> ${marker.properties.id} </h3>
        <div style="width:100%; display:flex;flex-direction:column; justify-content:center; align-items:center;">
          <div style="width:52px;height:52px;border-radius:50%;background-image:url('${
            marker.info?.photo
          }');background-size:cover;background-position:center;"/>
        </div>
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
            <button class="btn btn-primary" style="width:100%;margin-top:10px; display: block; ">Plus d'info</button>
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
        arr.map((e) => {
          let nodeArr = [];
          for (const marker of geojson.features) {
            if (e.includes(marker.properties.id)) {
              nodeArr.push(marker.geometry.coordinates);
            }
          }
          coordsFiltered.push(nodeArr);
        });
        return coordsFiltered;
      };
  
      addNodes([
        [2, 5, 4,3],
        [1, 7, 6],
        [0,7,8,4],
        [9,10,11]
      ]);
    };

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
