

function List({activities, isGoodWeather}){
    const filteredActivities = activities.filter(activity => activity.isForGoodWeather == isGoodWeather)
    console.log(filteredActivities)
    return (
        <>
        {isGoodWeather ? <p>Good weather activities</p> : <p>Bad weather activities</p>}
        <ul>
            {filteredActivities.map((activity, i) => (
                <div key={i}>
                    <li>{activity.activityName}</li>
                </div>
            ))}
        </ul>
        </>
    );
}

export default List;