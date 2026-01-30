/*
 SubmitButton Component
 - Renders a submit button
 - Tracks mouse enter and leave events
*/
function SubmitButton() {
  function handleEnter() {
    console.log("Mouse Entering");
  }

  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;
