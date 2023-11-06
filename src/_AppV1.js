import './App.css';

import Button from './Button';
import Row from './Row';

import {
  useState
} from 'react'

// React Component
const AppV1 = () => {

  // code

  const userInfo = {
    firstName: "Hakan",
    lastName: "Demir",
    age: 32
  }

  const getLastName = () => {

    return userInfo.lastName
  }


  const userList = []

  // let number = 10
  // const isLoggedIn = true

  const [number, setNumber] = useState(10)
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div>
        {
          userList.map((item, index) => {

            return (
              // <div>{item.firstName} {item.lastName} {item.age > 33 ? "Yaş Uygun" : "Yaş Uygun Değil"}</div>
              <Row item={item} />
            )
          })
        }

        </div>
        <div>{userInfo.firstName} isimli kullanıcının yaşı {userInfo.age > 30 ? "Uygun" : "Uygun Değildir"}</div>
        {
          isLoggedIn ? (
            <div>Oturum Açık</div>
          ) : (
            <div>Oturum Kapalı</div>
          )
        }
        <div>
          <Button title={isLoggedIn ? 'Logout' : 'Login'} onClick={() => {
            setLoggedIn(!isLoggedIn)
          }} />
        </div>
         <div style={{
          marginTop: 20
         }}>
          <div>Anlık Değer: {number}</div>
          <Button title="Increase" onClick={() => {
            setNumber(number+1)
            console.log('anlık değer', number)
          }} />
          <Button title="Decrease" onClick={() => {
            setNumber(number-1)
            console.log('anlık değer', number)
          }} />
        </div>
      </header>
    </div>
  );
}

// <Button /> JSX

export default AppV1;
