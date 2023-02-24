const Form = (props) => {
    const { city, setCity, getWeather } = props
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e =>setCity(e.target.value)} value={city}/>
            <button type="submit" onClick={getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;