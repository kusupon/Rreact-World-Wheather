const Results = (props) => {
    const { country, cityName, temperature, icon, conditionText } = props.results;
    return (
        <div className="resultArea">
            {country && <div className='results-country'>{country}</div>}
            {cityName && <div className='results-city'>{cityName}</div>}
            {temperature && <div className='results-temp'>{temperature}℃</div>}
            {country && 
            <div className='reusults-condition'>
                <img src={icon} alt="icon"/>
                <span>{conditionText}</span></div>}
        </div>
    );
};

export default Results;