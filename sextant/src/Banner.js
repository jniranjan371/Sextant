import React from 'react'; 
export default class Banner extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <div className='banner'>
                <h1>{this.props.name}</h1>
            </div>
        );
    }

}