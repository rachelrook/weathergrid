import React from 'react';
import WeatherGrid from './components/WeatherGrid';

const API_key="1f5e3644943adbc6abbbf4d874c8adec";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city1:undefined,
      city2:undefined,
      city3:undefined,
      city4:undefined,
      city5:undefined,
      city6:undefined,
      city7:undefined,
      city8:undefined,
      city9:undefined,
      city10:undefined,
      city11:undefined,
      city12:undefined,
      city13:undefined,
      city14:undefined,
      city15:undefined,
      city16:undefined,
      city17:undefined,
      city18:undefined,
      city19:undefined,
      city20:undefined,

      pressure1: undefined,
      pressure2: undefined,
      pressure3: undefined,
      pressure4: undefined,
      pressure5: undefined,
      pressure6: undefined,
      pressure7: undefined,
      pressure8: undefined,
      pressure9: undefined,
      pressure10: undefined,
      pressure11: undefined,
      pressure12: undefined,
      pressure13: undefined,
      pressure14: undefined,
      pressure15: undefined,
      pressure16: undefined,
      pressure17: undefined,
      pressure18: undefined,
      pressure19: undefined,
      pressure20: undefined,
      

      humidity1: undefined,
      humidity2: undefined,
      humidity3: undefined,
      humidity4: undefined,
      humidity5: undefined,
      humidity6: undefined,
      humidity7: undefined,
      humidity8: undefined,
      humidity9: undefined,
      humidity10: undefined,
      humidity11: undefined,
      humidity12: undefined,
      humidity13: undefined,
      humidity14: undefined,
      humidity15: undefined,
      humidity16: undefined,
      humidity17: undefined,
      humidity18: undefined,
      humidity19: undefined,
      humidity20: undefined,

      temperature1:undefined,
      temperature2:undefined,
      temperature3:undefined,
      temperature4:undefined,
      temperature5:undefined,
      temperature6:undefined,
      temperature7:undefined,
      temperature8:undefined,
      temperature9:undefined,
      temperature10:undefined,
      temperature11:undefined,
      temperature12:undefined,
      temperature13:undefined,
      temperature14:undefined,
      temperature15:undefined,
      temperature16:undefined,
      temperature17:undefined,
      temperature18:undefined,
      temperature19:undefined,
      temperature20:undefined,


    };
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/group?id=4407066,5128581,5368361,4887398,4335045,4164138,4684888,524901,5821086,5308655,4172052,4950065,4280539,4553433,4142290,4612862,5780993,703448,2643743,5586437&appid=${API_key}`
      );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city1:response.list[0].name,
      city2:response.list[1].name,
      city3:response.list[2].name,
      city4:response.list[3].name,
      city5:response.list[4].name,
      city6:response.list[5].name,
      city7:response.list[6].name,
      city8:response.list[7].name,
      city9:response.list[8].name,
      city10:response.list[9].name,
      city11:response.list[10].name,
      city12:response.list[11].name,
      city13:response.list[12].name,
      city14:response.list[13].name,
      city15:response.list[14].name,
      city16:response.list[15].name,
      city17:response.list[16].name,
      city18:response.list[17].name,
      city19:response.list[18].name,
      city20:response.list[19].name,

      pressure1:response.list[0].main.pressure,
      pressure2:response.list[1].main.pressure,
      pressure3:response.list[2].main.pressure,
      pressure4:response.list[3].main.pressure,
      pressure5:response.list[4].main.pressure,
      pressure6:response.list[5].main.pressure,
      pressure7:response.list[6].main.pressure,
      pressure8:response.list[7].main.pressure,
      pressure9:response.list[8].main.pressure,
      pressure10:response.list[9].main.pressure,
      pressure11:response.list[10].main.pressure,
      pressure12:response.list[11].main.pressure,
      pressure13:response.list[12].main.pressure,
      pressure14:response.list[13].main.pressure,
      pressure15:response.list[14].main.pressure,
      pressure16:response.list[15].main.pressure,
      pressure17:response.list[16].main.pressure,
      pressure18:response.list[17].main.pressure,
      pressure19:response.list[18].main.pressure,
      pressure20:response.list[19].main.pressure,

      humidity1:response.list[0].main.humidity,
      humidity2:response.list[1].main.humidity,
      humidity3:response.list[2].main.humidity,
      humidity4:response.list[3].main.humidity,
      humidity5:response.list[4].main.humidity,
      humidity6:response.list[5].main.humidity,
      humidity7:response.list[6].main.humidity,
      humidity8:response.list[7].main.humidity,
      humidity9:response.list[8].main.humidity,
      humidity10:response.list[9].main.humidity,
      humidity11:response.list[10].main.humidity,
      humidity12:response.list[11].main.humidity,
      humidity13:response.list[12].main.humidity,
      humidity14:response.list[13].main.humidity,
      humidity15:response.list[14].main.humidity,
      humidity16:response.list[15].main.humidity,
      humidity17:response.list[16].main.humidity,
      humidity18:response.list[17].main.humidity,
      humidity19:response.list[18].main.humidity,
      humidity20:response.list[19].main.humidity,

      temperature1:response.list[0].main.temp,
      temperature2:response.list[1].main.temp,
      temperature3:response.list[2].main.temp,
      temperature4:response.list[3].main.temp,
      temperature5:response.list[4].main.temp,
      temperature6:response.list[5].main.temp,
      temperature7:response.list[6].main.temp,
      temperature8:response.list[7].main.temp,
      temperature9:response.list[8].main.temp,
      temperature10:response.list[9].main.temp,
      temperature11:response.list[10].main.temp,
      temperature12:response.list[11].main.temp,
      temperature13:response.list[12].main.temp,
      temperature14:response.list[13].main.temp,
      temperature15:response.list[14].main.temp,
      temperature16:response.list[15].main.temp,
      temperature17:response.list[16].main.temp,
      temperature18:response.list[17].main.temp,
      temperature19:response.list[18].main.temp,
      temperature20:response.list[19].main.temp,
      
    });
    };

  render() {
    return (
      <WeatherGrid city1={this.state.city1} city2={this.state.city2} city3={this.state.city3} city4={this.state.city4} city5={this.state.city5} city6={this.state.city6} city7={this.state.city7} city8={this.state.city8} city9={this.state.city9} city10={this.state.city10} city11={this.state.city11} city12={this.state.city12} city13={this.state.city13} city14={this.state.city14}city15={this.state.city15} city16={this.state.city16} city17={this.state.city17} city18={this.state.city18} city19={this.state.city19} city20={this.state.city20}
      pressure1={this.state.pressure1} pressure2={this.state.pressure2} pressure3={this.state.pressure3} pressure4={this.state.pressure4} pressure5={this.state.pressure5} pressure6={this.state.pressure6} pressure7={this.state.pressure7} pressure8={this.state.pressure8} pressure9={this.state.pressure9} pressure10={this.state.pressure10}pressure11={this.state.pressure11} pressure12={this.state.pressure12} pressure13={this.state.pressure13} pressure14={this.state.pressure14} pressure15={this.state.pressure15} pressure16={this.state.pressure16} pressure17={this.state.pressure17} pressure18={this.state.pressure18} pressure19={this.state.pressure19} pressure20={this.state.pressure20} 
      humidity1={this.state.humidity1} humidity2={this.state.humidity2} humidity3={this.state.humidity3} humidity4={this.state.humidity4} humidity5={this.state.humidity5} humidity6={this.state.humidity6} humidity7={this.state.humidity7} humidity8={this.state.humidity8} humidity9={this.state.humidity9} humidity10={this.state.humidity10} humidity11={this.state.humidity11} humidity12={this.state.humidity12}humidity13={this.state.humidity13} humidity14={this.state.humidity14}humidity15={this.state.humidity15} humidity16={this.state.humidity16}humidity17={this.state.humidity17} humidity18={this.state.humidity18}humidity19={this.state.humidity19} humidity20={this.state.humidity20}
      temperature1={this.state.temperature1} temperature2={this.state.temperature2} temperature3={this.state.temperature3} temperature4={this.state.temperature4} temperature5={this.state.temperature5} temperature6={this.state.temperature6} temperature7={this.state.temperature7}temperature8={this.state.temperature8} temperature9={this.state.temperature9} temperature10={this.state.temperature10} temperature11={this.state.temperature11} temperature12={this.state.temperature12} temperature13={this.state.temperature13} temperature14={this.state.temperature14} temperature15={this.state.temperature15} temperature16={this.state.temperature16} temperature17={this.state.temperature17}temperature18={this.state.temperature18} temperature19={this.state.temperature19} temperature20={this.state.temperature20}
      />
    );
  }
}
export default App;