import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TodoContext from '../../context/TodoContext';
import CustomButton from '../commom/CustomButton';
import { ReactComponent as Logo } from '../../assets/imgs/logo.svg';
import { useHistory } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ReactComponent as DropdownArrow } from '../../assets/imgs/dropdown_arrow.svg';

export default function MainHeader() {
  const { lastTodo, isAuth, logout } = useContext(TodoContext);
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`d-flex justify-content-between aling-items-center p-5 ${
        history.location.pathname === '/' ? 'landing' : ''
      }`}
    >
      <NavLink to={'/'} className="align-self-center">
        <Logo width={100} />
      </NavLink>
      {isAuth ? (
        <>
          <NavLink to={`/app`} className="p-0 m-0 mt-2 fw-medium pointer align-self-center menu-item text-uppercase">
            All todos
          </NavLink>

          <div className="d-flex align-items-center justify-content-center">
            {lastTodo && (
              <NavLink to={`/app/todo/${lastTodo.id}`} className="p-0 m-0 mx-3 fw-medium pointer">
                {lastTodo.name}
              </NavLink>
            )}
            <Dropdown isOpen={showMenu} toggle={() => setShowMenu(!showMenu)} direction="down" style={{ zIndex: 100 }}>
              <DropdownToggle className="m-0 p-0 menu-toggle pointer">
                <div></div>
                <DropdownArrow width={15} height={15} className="arrow" />
              </DropdownToggle>
              <DropdownMenu className="mt-2" right>
                <DropdownItem onClick={logout} className="small-text text-uppercase spaced fw-semibold">
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <NavLink to={`/login`} className="p-0 m-0 mx-3 fw-medium pointer">
            <CustomButton className="px-5 py-3" outline>
              Login
            </CustomButton>
          </NavLink>
        </div>
      )}
    </header>
  );
}
