import React from 'react';

class GlobePage extends React.Component {
    constructor() {
        super();
        this.state = {
            covidData: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(countryName) {
        await fetch('https://covid-api.mmediagroup.fr/v1/cases')
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    covidData: res[countryName]['All']
                });
                console.log(this.state.covidData);
            })
            .catch((e) => console.log(e));
    }

    render() {
        /*
        var afg = this.state.covidData.length === 0 ? '' : this.state.covidData['deaths'];
        var countryName = 'China';
        */
        return (
            <div> 
                {/*}
                <button onClick={() => this.handleClick(countryName)}>Get COVID data</button>
                <p>{countryName}</p>
                <p>Deaths: {afg}</p> */}
            </div>
        );
    }
}

export default GlobePage;