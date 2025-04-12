import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction, PrivacyAction } from "../store";

const Control = () => {
  const dispatch = useDispatch();
  const InputValue = useRef();

  // +1 button
  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  // -1 button
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  //Addition
  const handleAdd = () => {
    dispatch(counterAction.add(InputValue.current.value));
    InputValue.current.value = "";
  };

  //Substract
  const handleSub = () => {
    dispatch(counterAction.sub(InputValue.current.value));
    InputValue.current.value = "";
  };

  // Privacy Button
  const privacu_toggle = () => {
    dispatch(PrivacyAction.toggle());
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="row">
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-success px-4"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={privacu_toggle}
          >
            Privacy Toogle
          </button>
        </div>
      </div>
      <div className="row">
        <div className="d-flex gap-3">
          <input type="text" placeholder="Enter Number" ref={InputValue} />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAdd}
          >
            Add
          </button>
          <button type="button" className="btn btn-danger" onClick={handleSub}>
            Sub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;
