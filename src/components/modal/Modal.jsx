import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actionCreators/modalAC";
import "./modal.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { changeUser, deleteUser, newUser } from "../../redux/actionCreators/userAC";
import { CONF, NEW, SAVE } from "../../redux/types/modalTypes";

const Window = () => {
  const modal = useSelector((state) => state.modal);
  const rolesRedux = useSelector((state) => state.roles);

  const dispath = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [role, setRole] = useState({});
  const [birthday, setBirthday] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [changeDate, setChangeDate] = useState("");

  const initStateRoles = rolesRedux.collection
    ? rolesRedux.collection[2]
    : { id: "cda009c3-529a-432c-9df6-7b5d83be63f3", title: "Гость" };

  useEffect(() => {
    setName(modal.name);
    setSurname(modal.surname);
    setMiddleName(modal.middleName);
    setRole(modal.role ? modal.role : initStateRoles);
    setBirthday(new Date(modal.birthday));
    setBirthPlace(modal.birthPlace);
    setMail(modal.email);
    setPhoneNumber(modal.phoneNumber);
    setRegisterDate(
      modal.registerDate ? new Date(modal.registerDate) : new Date()
    );
    setChangeDate(new Date());
  }, [modal]);

  const typeSubmitFunc = () => {
    switch (modal.type) {
      case SAVE:
        return "Сохранить";
      case NEW:
        return "Создать";
      default:
        return "";
    }
  };

  const submitFunc = (e) => {
    e.preventDefault();
    switch (modal.type) {
      case SAVE:
        dispath(
          changeUser({
            name,
            surname,
            middleName,
            birthday,
            birthPlace,
            email: mail,
            phoneNumber,
            registerDate,
            changeDate,
            roleId: role.id,
            id: modal.id,
            lastUpdate: changeDate,
          })
        );
        return;
      case NEW:
        dispath(
          newUser({
            name,
            surname,
            middleName,
            birthday,
            birthPlace,
            email: mail,
            phoneNumber,
            registerDate,
            changeDate,
            roleId: role.id,
            id: Date.now(),
            lastUpdate: changeDate,
          })
        );
        return;
      default:
        return;
    }
  };

  // или возвращаем верстку модального окна
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-header">
          <div className="modal-close" onClick={() => dispath(closeModal())}>
            <div>&times;</div>
          </div>
        </div>
        <div className="modal-title">
          <div>Редактирование</div>
        </div>
        <form onSubmit={submitFunc} className="modal-body">
          <div className="modal-content">
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Имя"
                defaultValue={modal.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Фамилия"
                defaultValue={modal.surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Отчество"
                defaultValue={modal.middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </div>
            <div className="modal-content-input">
              <select
                value={role?.title}
                onChange={(e) => {
                  setRole({
                    title: e.target.value,
                    id: rolesRedux.collection.find(
                      (el) => el.title === e.target.value
                    ).id,
                  });
                }}
                className="select-css"
              >
                {rolesRedux.collection.map((el, i) => (
                  <option key={i}>{el.title}</option>
                ))}
              </select>
            </div>
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Дата рождения"
                defaultValue={modal.birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Место рождения"
                defaultValue={modal.birthPlace}
                onChange={(e) => {
                  setBirthPlace(e.target.value);
                }}
              />
            </div>

            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Мыло"
                defaultValue={modal.email}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
            <div className="modal-content-input">
              <TextField
                sx={{ width: "350px" }}
                required
                id="outlined-required"
                label="Номер"
                defaultValue={modal.phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div className="modal-content-data-container">
              <TextField
                sx={{ width: "170px" }}
                disabled
                id="outlined-disabled"
                label="Дата регистрации"
                defaultValue={registerDate}
              />
              <TextField
                sx={{ width: "170px" }}
                disabled
                id="outlined-disabled"
                label="Последнее изменение"
                defaultValue={changeDate}
              />
            </div>

            <div className="modal-content-input">
              <Button sx={{ width: "350px" }} type="submit" variant="contained">
                {typeSubmitFunc()}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Confirmation = () => {
  const modal = useSelector((state) => state.modal);
  const dispath = useDispatch();
  const id = modal.user

  return (
    <div className="modalConf">
      <div className="modalDialogConf">
        <div className="modal-header">
          <div className="modalCloseConf">
            <div>Точно ?</div>
          </div>
        </div>
        <div>
          <Button
            onClick={() => {dispath(deleteUser(id)); dispath(closeModal())}}
            sx={{ width: "150px", margin: "10px " }}
            type="submit"
            variant="contained"
          >
            ДА
          </Button>
          <Button
            onClick={() => dispath(closeModal())}
            sx={{ width: "150px" }}
            type="submit"
            variant="contained"
          >
            НЕТ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Modal() {
  const modal = useSelector((state) => state.modal);
  switch (modal.type) {
    case SAVE:
      return <Window />;

    case NEW:
      return <Window />;

    case CONF:
      return <Confirmation />;

    default:
      return null;
  }
}
