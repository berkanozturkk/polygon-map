# Map Polygon Drawing

## Scope:

This application is a web application where the user can add polygons on the map and query these polygons.


## Features:

1- Opening the Map:  When the application is opened, the map zooms to Turkey.

2- Add Drawing: When the "Add Drawing" button is clicked, on the map
polygon can be drawn anywhere and when the drawing process is finished, a modal-popup etc. opens. In the window that opens, ask the user for a name (string) and
number (integer), then all coordinates of the drawing and the name and number information entered by the user (via API) is written to a json file.

3- Query Drawing: When the "Query Drawing" button is clicked, a modalpopup
is opened and the data stored in the json file (name, number and
coordinates) are taken and displayed on a datatable.

## Technologies Used : 

-Backend : .NET (C#)

-Frontend : Angular, HTML, CSS

-Map : OpenLayers (6 or newer version)
