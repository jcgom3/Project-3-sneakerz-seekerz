import React from "react";

// The ...props means, spread all of the passed props onto this element.. thus no need to have to define them all individually
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;