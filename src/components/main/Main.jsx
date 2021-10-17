
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../../redux/actionCreators/rolesAC";
import { getUsers } from "../../redux/actionCreators/userAC";
import Body from "../body/Body";
import Headers from "../headers/Headers";
import Modal from "../modal/Modal.jsx";
import './main.scss'

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRoles())
  }, []);
 
  return (
    <div className="main">
      <Headers />
      <Body />
      <Modal/>
    </div>
  );
}
