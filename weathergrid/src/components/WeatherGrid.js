import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { render } from "react-dom";

const columns = [
    { field: 'id', HeaderName: 'ID', width: 20},
    { field: 'name', HeaderName: 'Name', width: 200},
    { field: 'pressure', HeaderName: 'Pressure', width: 200},
    { field: 'humidity', HeaderName: 'Humidity', width: 200 },
    { field: 'temp', HeaderName: 'Temperature', width: 150 }
]

const WeatherGrid = (props) => {
    const rows = [
        { id: 1, name: `${props.city1}`, pressure: `${props.pressure1}`, humidity: `${props.humidity1}`, temp: `${props.temperature1}` },
        { id: 2, name: `${props.city2}`, pressure: `${props.pressure2}`, humidity: `${props.humidity2}`, temp: `${props.temperature2}` },
        { id: 3, name: `${props.city3}`, pressure: `${props.pressu}`, humidity: `${props.humidity3}`, temp: `${props.temperature3}` },
        { id: 4, name: `${props.city4}`, pressure: `${props.pressure4}`, humidity: `${props.humidity4}`, temp: `${props.temperature4}` },
        { id: 5, name: `${props.city5}`, pressure: `${props.pressure5}`, humidity: `${props.humidity5}`, temp: `${props.temperature5}` },
        { id: 6, name: `${props.city6}`, pressure: `${props.pressure6}`, humidity: `${props.humidity6}`, temp: `${props.temperature6}` },
        { id: 7, name: `${props.city7}`, pressure: `${props.pressure7}`, humidity: `${props.humidity7}`, temp: `${props.temperature7}` },
        { id: 8, name: `${props.city8}`, pressure: `${props.pressure8}`, humidity: `${props.humidity8}`, temp: `${props.temperature8}` },
        { id: 9, name: `${props.city9}`, pressure: `${props.pressure9}`, humidity: `${props.humidity9}`, temp: `${props.temperature9}` },
        { id: 10, name: `${props.city10}`, pressure: `${props.pressure10}`, humidity: `${props.humidity10}`, temp: `${props.temperature10}` },
        { id: 11, name: `${props.city11}`, pressure: `${props.pressure11}`, humidity: `${props.humidity11}`, temp: `${props.temperature11}` },
        { id: 12, name: `${props.city12}`, pressure: `${props.pressure12}`, humidity: `${props.humidity12}`, temp: `${props.temperature12}` },
        { id: 13, name: `${props.city13}`, pressure: `${props.pressure13}`, humidity: `${props.humidity13}`, temp: `${props.temperature13}` },
        { id: 14, name: `${props.city14}`, pressure: `${props.pressure14}`, humidity: `${props.humidity14}`, temp: `${props.temperature14}` },
        { id: 15, name: `${props.city15}`, pressure: `${props.pressure15}`, humidity: `${props.humidity15}`, temp: `${props.temperature15}` },
        { id: 16, name: `${props.city16}`, pressure: `${props.pressure16}`, humidity: `${props.humidity16}`, temp: `${props.temperature16}` },
        { id: 17, name: `${props.city17}`, pressure: `${props.pressure17}`, humidity: `${props.humidity17}`, temp: `${props.temperature17}` },
        { id: 18, name: `${props.city18}`, pressure: `${props.pressure18}`, humidity: `${props.humidity18}`, temp: `${props.temperature18}` },
        { id: 19, name: `${props.city19}`, pressure: `${props.pressure19}`, humidity: `${props.humidity19}`, temp: `${props.temperature19}` },
        { id: 20, name: `${props.city20}`, pressure: `${props.pressure20}`, humidity: `${props.humidity20}`, temp: `${props.temperature20}` },
    ]
    return(
        <div style={{height: 700, width: '80%', margin: '5%'}}>
            <h3>Weather Grid</h3><h5>a Coding Exercise</h5>
            <DataGrid class
                rows={rows}                columns={columns}
                pageSize={20}
                rowHeight={30}
            />
        </div>
    )
        
}

export default WeatherGrid;