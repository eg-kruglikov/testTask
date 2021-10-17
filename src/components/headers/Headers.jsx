import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { openModelNew } from "../../redux/actionCreators/modalAC";
import './headers.scss'

export default function Headers() {
  const dispath = useDispatch();

  return <div className='headers'>
    <p className='headersUsers'>Пользователи</p>
    <Button onClick={()=>dispath(openModelNew())} variant="outlined">Добавить нового пользователя</Button>
  </div>;
}
