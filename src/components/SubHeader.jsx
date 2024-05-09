{
  /* SubHeader är en återanvändbar komponent som tar emot en prop som heter text, 
  som kan ändras och specificeras beroende vilken text som ska visas på vyn/sidan. */
}

const SubHeader = ({ text }) => {
  return <h2>{text}</h2>;
};

export default SubHeader;
