import { useParams } from "react-router-dom";
const Styles = {
  details: {
    textAlign: "center",
    background: "#088395",
    width: "50%",
    margin: "2% auto",
    padding: "2%",
    borderRadius: "10px",
    color: "white",
    fontSize: "40px",
  },
};
let Details = (props) => {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <p style={Styles.details}>ID:{id}</p>
    </div>
  );
};
export default Details;