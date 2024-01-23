

function List({activities, isGoodWeather}){
    const filteredActivities = activities.filter(activity => activity.isForGoodWeather == isGoodWeather)
    return (
        <section >
        {isGoodWeather ? <h2>Good weather activities</h2> : <h2>Bad weather activities</h2>}
        <ul className="container">
            {filteredActivities.map((activity, i) => (
                <div key={i} className="list">
                    <li>
                        <span  className="item-text">{activity.activityName}</span>
                        <button className="delete-button" onClick={() => console.log(this)}>X</button></li>
                </div>
            ))}
        </ul>
        </section>
    );
}

export default List;