const Row = ({
    item
}) => {

    console.log('props', item)

    // const userInfo = {
    //     firstName: "Hakan",
    //     lastName: "Demir",
    //     age: 32
    //   }
      
    // const {firstName} = userInfo // destructure


    return (
        <div>{item.firstName}</div>
    )
}

export default Row