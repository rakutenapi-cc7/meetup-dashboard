const selectCountry = (country) => {
  return {
    type: "SELECT_COUNTRY",
    country,
  };
};
const renderCities = (cities) => {
  return {
    type: "RENDER_CITIES",
    cities,
  };
};

const selectCity = (city) => {
  return {
    type: "SELECT_CITY",
    city,
  };
};

const storeMeetups = (meetups) => {
  return {
    type: "STORE_MEETUPS",
    meetups,
  };
};

const renderMeetups = (meetupCards) => {
  return {
    type: "RENDER_MEETUPS",
    meetupCards,
  };
};

const renderHolidaysOrWeekendMeetups = (holidayOrWeekendMeetups) => {
  return {
    type: "HOLIDAYS_ONLY",
    holidayOrWeekendMeetups,
  };
};

module.exports = {
  selectCountry,
  renderCities,
  selectCity,
  storeMeetups,
  renderMeetups,
  renderHolidaysOrWeekendMeetups,
};
