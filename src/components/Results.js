const Results = (props) => {
    return (
        <div className="resultArea">
            {props.results.country && <div className='results-country'>{props.results.country}</div>}
            {props.results.cityName && <div className='results-city'>{props.results.cityName}</div>}
            {props.results.temperature && <div className='results-temp'>{props.results.temperature}℃</div>}
            {props.results.country && 
            <div className='reusults-condition'>
                <img src={props.results.icon} alt="icon"/>
                <span>{props.results.conditionText}</span></div>}
        </div>
    );
};

export default Results;