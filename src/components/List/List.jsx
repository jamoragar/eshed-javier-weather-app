import HeaderList from "../ListHeader/ListHeader";
import TrashIcon from "../Icons/TrashIcon";
function List({ activities, weatherData, onDeleteActivity }) {
  const { isGoodWeather } = weatherData;
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather == isGoodWeather
  );

  return (
    <section className="container__list">
      <HeaderList {...weatherData} />
      <ol
        className={`circle-list circle-list__${
          isGoodWeather ? "good-weather " : "bad-weather"
        }`}
      >
        {filteredActivities.map((activity, i) => (
          <li key={i}>
            <h2 className="item-text">{activity.activityName}</h2>
            <button
              className="button__delete"
              onClick={() => onDeleteActivity(activity.activityName, i)}
            >
              <TrashIcon fill="black" />
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default List;
