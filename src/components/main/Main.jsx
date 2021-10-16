import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actionCreators/userAC";
import Body from "../body/Body";
import Headers from "../headers/Headers";
import './main.scss'

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="main">
      <Headers />
      <Body />
    </div>
  );
}
