import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../../action/countries";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';

const m = ({ countries }) => ({ countries });


@connect(m, { fetchCountries })
export default class Countries extends Component {

  componentDidMount() {
    this.props.fetchCountries();
  }


  render() {
    const { countries: { isFetching, data } } = this.props;

    if(isFetching) {
      return <Loading />
    }

    return(
      <div className="container">
        <div className="countries-container">
          {data.map((item, i) => <CountriesItem key={i} {...item} />)}
        </div>
      </div>
    );
  }
};