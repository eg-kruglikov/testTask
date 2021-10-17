import { useSelector } from "react-redux";
import "./users.scss";
import change from "./change.png";
import deleteImg from "./delete.png";
import { useDispatch } from "react-redux";
import { openModelSave } from "../../redux/actionCreators/modalAC";
import { deleteUser } from "../../redux/actionCreators/userAC";

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();
  return (
    <div className="users">
      <div className="usersHeader">
        <div className='userIndex'><p>№</p> </div>
        <div className='userName'><p> ФИО пользователя</p></div>
        <div className='userTitle'><p>Роль</p></div>
        <div className='userBirthday'><p>Дата рождения</p></div>
        <div className='userBirthPlace'><p>Место рождения</p></div>
        <div className='userEmail'><p>Почта</p></div>
        <div className='userPhoneNumber'><p>Телефон</p></div>
        <div className='userRegisterDate'><p>Регистрация</p></div>
        <div className='userLastUpdate'><p>Изменение</p></div>
        <div className='userChange'><p>Ред</p></div>
        <div className='userDelete'><p>Удалить</p></div>
      </div>

      {users.collection?.map((el, i) => (
        <div key={i} className="usersBody">
          <div className='userIndex'>{i}</div>
          <div className='userName'>{`${el.name} ${el.surname.split("")[0]}.${
            el.middleName.split("")[0]
          }.`}</div>
          <div className='userTitle'>{el.role?.title}</div>
          <div className='userBirthday'>{el.birthday}</div>
          <div className='userBirthPlace'>{el.birthPlace}</div>
          <div className='userEmail'>{el.email}</div>
          <div className='userPhoneNumber'>{el.phoneNumber}</div>
          <div className='userRegisterDate'>{el.registerDate}</div>
          <div className='userLastUpdate'>{el.lastUpdate}</div>
          <div className='userChange'
            onClick={() => {
              dispath(openModelSave(el));
            }}
          >
            <img className="changeImg" src={change} alt="" />
          </div>
          <div onClick={() => {
              dispath(deleteUser(el.id));
            }} className='userDelete'>
            <img className="deleteImg" src={deleteImg} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
