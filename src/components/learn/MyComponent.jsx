
import "./style.css"

const MyComponent = () => {
    const a = 123;
    const b = "Itech";
    const user = {
        "name": "Duy Tin",
        "age": "20"
    }
    return (
        <>
            <div className="parent">Hello {a} {b} </div>
            <div className="duytin">Hello {user.name} {user.age} </div>
            <div className="duytinString">Hello {JSON.stringify(user)}</div>
            <div className="child" style={{ borderRadius: "10px" }}>Hello</div>
        </>

    );

}
export default MyComponent;