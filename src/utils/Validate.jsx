import React from "react";

const Validate = ({ email, password }) => {
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validatePassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );
  if (!validateEmail) {
    return <div>Invalid email format</div>;
  }
  if (!validatePassword) {
    return (
      <div>
        At least 8 characters,one uppercase letter,one number or special
        character.
      </div>
    );
  }
};

export default Validate;
