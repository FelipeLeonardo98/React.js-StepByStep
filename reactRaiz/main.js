// STATE: HOW TO USE {children}

function MyComponent1(props){
    return (
            <div className="component-1">
                <MyComponent2 getIncrement1={props.getIncrement} />
                
                 
            </div>
    )
}

function MyComponent2(props){
    return (
        <div className="component-2">
             <MyComponent3  getIncrement2={props.getIncrement1}/> 
        </div>
    )
}

function MyComponent3(props){
    const [second, setSecond] = React.useState(0);
    setTimeout(function(){
        setSecond(second+1);
    }, 1500);
return(
        <div className="component-3">
              <MyComponent4  segs={second}  getIncrement3={props.getIncrement2} />  
        </div>
    )
}
function MyComponent4(props){
    const [hundred, setHundred] = React.useState(100);
    // const [segs, getIncrement3] = props;
    setTimeout(function(){
        setHundred(hundred+100);
    }, 1600)

    return (
        <div className="component-4">
             <p>Here is the Component Four | Seconds: {props.segs} - Hundreds: {hundred}</p>
             <button onClick={props.getIncrement3}> Click at me !</button>
        </div>
    )
}

// Component Main level 1
function MyComponent(props){
    return (
        <div className="main">
            <MyComponent1  getIncrement={props.hereIncrement} />
        </div>
    )
}

// Component Main level 1
function MyComponentBrother(props){
    return (
        <div id="mainBrother">
            <MyComponentBrother2 count={props.hereCount}/>
        </div>
    )
}

// Component Main level 1
function MyComponentBrother2(props){
    // add to localStorage
    React.useEffect(function() {
        localStorage.setItem('Count', props.count);
    },)
    
    return (
        <div id="mainBrother2">
            Count: {props.count}
        </div>
    )
}

//Component Main level 0
function AppComponent(){

    // state of count
    const [count, setCount] = React.useState(parseInt(localStorage.getItem('Count'), 10) || 0);
    // Getting value from localStorage
    const incrementClick = function (){
        setCount(count+1);
    };

    return(
    <React.Fragment>
        <MyComponent hereIncrement={incrementClick} />
        <MyComponentBrother  hereCount={count} />
    </React.Fragment>
    )
}

ReactDOM.render
(
    <AppComponent/>,
    document.getElementById('app')
)