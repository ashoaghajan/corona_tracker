import React from 'react';
import { fetchData } from './api/api';
import Chards from './components/Chards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import coronaImage from './images/covid_imadge.png';

export interface Props {
  
}
 
export interface State {
  data: any,
  country: string
}

class App extends React.Component<Props, State> {

  constructor(props: any){
    super(props);
    this.state = {
      data: {},
      country: ''
    }
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data });
  }

  async handleCountrySelect(countryName: string){
    const data = await fetchData(countryName);
    this.setState({ data, country: countryName });
  }

  render(){
    const { data } = this.state;

    return (
      <div className='container'>
        <img src={coronaImage} alt="coronaImage" className='image'/>
        <Chards data={data}/>
        <CountryPicker handleCountrySelect={this.handleCountrySelect}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    )
  }
}

export default App;
