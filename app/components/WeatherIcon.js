import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faSmog,
  faUmbrella,
  faBolt,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
export default function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Haze":
      return <FontAwesomeIcon icon={faSmog} />;
    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Thunderstorm":
      return <FontAwesomeIcon icon={faBolt} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faCloud} />;
  }
}
