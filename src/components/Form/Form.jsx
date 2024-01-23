function Form({ onAddActivity }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        data['isForGoodWeather'] = data.hasOwnProperty('isForGoodWeather');

        onAddActivity(data);
        event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>

      <div>
        <label htmlFor="inputText">Name:</label>
        <input className="input__activity" type="text" id="inputText" name="activityName"/>
      </div>

      <div>
        <label htmlFor="checkbox">Good-weather activity:</label>
        <input type="checkbox" id="checkbox" name="isForGoodWeather" />
      </div>

      <button className="submitButton" type="submit">Submit</button>
    </form>
  );
}

export default Form;
