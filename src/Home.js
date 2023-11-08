import './App.css';

import Button from './Button';
import Row from './Row';

import {
    useState,
    useEffect
} from 'react'

import {
    Table,
    Form,
    Spinner
} from 'react-bootstrap'

import Modal from './Modal';

import {
    useNavigate
} from 'react-router-dom'

import {
    getAll,
    addNew,
    updateUser,
    removeUser
} from './redux/dispatch';

import {
    useRedux
} from './redux/hooks';

import Header from './Header';

const Home = () => {

    const { userList, isLoggedIn, profile } = useRedux()

    const navigate = useNavigate()

    const userInfoTemplate = {
        firstName: "",
        lastName: "",
        age: ""
    }

    const [userInfo, setUserInfo] = useState(userInfoTemplate)

    const [updateIndex, setUpdateIndex] = useState(-1)
    const [removeIndex, setRemoveIndex] = useState(-1)

    const [modalOn, setModalOn] = useState(false)

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {

        // console.log('effect', userInfo)

    }, [userInfo])

    const setUserInput = (key, value) => {

        setUserInfo({
            ...userInfo,
            [key]: value
        })
    }

    const resetForm = () => {

        setUpdateIndex(-1)
        setUserInfo(userInfoTemplate)
    }

    const loadData = () => {

        setLoading(true)

        getAll({
            callback: () => {
                console.log('callback')
                setLoading(false)
            }
        })
    }

    useEffect(() => {

        // console.log('constructor')
        loadData()

    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((item, index) => {

                                    return (
                                        <Row
                                            key={index}
                                            item={item}
                                            index={index}
                                            onView={() => {

                                                const userUrl = `/view/${item._id}`
                                                navigate(userUrl)

                                                console.log('detaya gidilecek id', userUrl)
                                            }}
                                            onUpdate={() => {

                                                const item = userList[index]
                                                setUserInfo(item)

                                                setUpdateIndex(index)
                                            }}
                                            onRemove={() => {

                                                setModalOn(true)
                                                setRemoveIndex(index)

                                            }}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                {
                    isLoading && (
                        <div>
                            <Spinner animation="border" variant="primary" />
                        </div>
                    )
                }
                <div>
                    <Form.Control placeholder='Ad' value={userInfo.firstName} onChange={(e) => {

                        setUserInput('firstName', e.target.value)

                    }} />
                    <Form.Control placeholder='Soyad' value={userInfo.lastName} onChange={(e) => {

                        setUserInput('lastName', e.target.value)

                    }} />
                    <Form.Control placeholder='Yaş' value={userInfo.age} onChange={(e) => {

                        setUserInput('age', e.target.value)

                    }} />
                </div>
                <div>
                    <Button variant='success' title={updateIndex === -1 ? "Ekle" : "Güncelle"} onClick={() => {

                        if (updateIndex === -1) {

                            // EKLE

                            setLoading(true)

                            addNew({
                                callback: () => {
                                    setLoading(false)
                                },
                                userInfo
                            })

                        } else {

                            // GÜNCELLE

                            setLoading(true)

                            const _id = userList[updateIndex]?._id

                            updateUser({
                                callback: () => {
                                    setLoading(false)
                                },
                                userInfo,
                                _id
                            })
                        }

                        resetForm()

                    }} />
                </div>
            </header>
            <Modal
                title="Emin misin ?"
                body={`${userList[removeIndex]?.firstName} isimli kişi silinecektir.`}
                show={modalOn}
                handleConfirm={() => {

                    setLoading(true)

                    const _id = userList[removeIndex]?._id

                    removeUser({
                        callback: () => {
                            setLoading(false)
                        },
                        _id
                    })

                    setModalOn(false)

                }}
                handleClose={() => {

                    setModalOn(false)
                    setRemoveIndex(-1)

                }}
            />
        </div>
    );
}

export default Home