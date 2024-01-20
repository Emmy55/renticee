import FinanceService from "./FinanceService.jsx";
import Commercial from "./Media/commercial.png";

const Residential = () => {
  return (
    <FinanceService
      Color="#035FCE"
      tempColor="white"
      heroText="Simple and affordable real estate options to offer you and your family the utmost peace of mind"
      showAdditionalDiv={true}
      heroImg={Commercial}
    />
  );
};
export default Residential;
