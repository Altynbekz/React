//ill create 3 objects and plig it in to an array
const obj1 = {
    taskNumber: 1,
    taskDesc: 'my first hello world in React'
}
const obj2 = {
    taskNumber: 2,
    taskDesc: 'my second hello world in React'
}
const obj3 = {
    taskNumber: 3,
    taskDesc: 'my second hello world in React'
}


const arr = [obj1,obj2,obj3];

function showAll(){
    let counter = 0;

    function obj(){
        let object = arr[counter];
        counter++;
        return object;
    }
    return obj;
}
const newFunction = showAll();

const Test = (props) => {
    return React.createElement("div",{},[
        React.createElement('h1',{key:'number'}, props.taskNumber),
        React.createElement('p',{key:'discription'}, props.taskDesc)
    ])
}

const testReact = () =>{
    return React.createElement('div',{},[
        React.createElement(Test, {key:1, ...newFunction()}),
        React.createElement(Test, {key:2, ...newFunction()}),
        React.createElement(Test, {key:3, ...newFunction()})
    ])
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(testReact));
