# polygon-map

Scope:
This application is a web application where the user can add polygons on the map and query these polygons.
Openlayers 6 or newer version is used for map operations. OSM is used as the base layer on the map. 
Asp.Net Web API is used for the backend. Angular Typescript is used for the frontend.
Features:
1- Opening the Map:  When the application is opened, the map zooms to Turkey.
2- Add Drawing: When the "Add Drawing" button is clicked, on the map
polygon can be drawn anywhere and when the drawing process is finished, a modal-popup etc. opens. In the window that opens, ask the user for a name (string) and
number (integer), then all coordinates of the drawing and the name and number information entered by the user (via API) is written to a json file.
3- Query Drawing: When the "Query Drawing" button is clicked, a modalpopup
is opened and the data stored in the json file (name, number and
coordinates) are taken and displayed on a datatable.
