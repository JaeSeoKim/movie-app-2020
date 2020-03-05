import React from 'react';
import Info from '../components/Info';
import "./Detail.css";

class Detail extends React.Component{ 
  componentDidMount(){
    const {history,location : {state}} = this.props;
    if (state === undefined){
      history.push('/');
    }
  }
  render(){
    console.log(this.props);
    const {location : {state}} = this.props;
    if (state === undefined){
      return null;
    }else{
      return <Info 
        key={state.id}
        id={state.id}
        title={state.title}
        year={state.year}
        summary={state.summary}
        rating={state.rating}
        poster={state.poster}  
        genres={state.genres}
      />
    }
  }
}

export default Detail;