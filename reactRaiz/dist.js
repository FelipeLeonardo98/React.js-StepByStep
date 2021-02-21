// STATE: HOW TO USE {children}
function MyComponent1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, {
    getIncrement1: props.getIncrement
  }));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MyComponent3, {
    getIncrement2: props.getIncrement1
  }));
}

function MyComponent3(props) {
  const [second, setSecond] = React.useState(0);
  setTimeout(function () {
    setSecond(second + 1);
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    segs: second,
    getIncrement3: props.getIncrement2
  }));
}

function MyComponent4(props) {
  const [hundred, setHundred] = React.useState(100); // const [segs, getIncrement3] = props;

  setTimeout(function () {
    setHundred(hundred + 100);
  }, 1600);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "Here is the Component Four | Seconds: ", props.segs, " - Hundreds: ", hundred), /*#__PURE__*/React.createElement("button", {
    onClick: props.getIncrement3
  }, " Click at me !"));
} // Component Main level 1


function MyComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(MyComponent1, {
    getIncrement: props.hereIncrement
  }));
} // Component Main level 1


function MyComponentBrother(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "mainBrother"
  }, /*#__PURE__*/React.createElement(MyComponentBrother2, {
    count: props.hereCount
  }));
} // Component Main level 1


function MyComponentBrother2(props) {
  // add to localStorage
  React.useEffect(function () {
    localStorage.setItem('Count', props.count);
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "mainBrother2"
  }, "Count: ", props.count);
} //Component Main level 0


function AppComponent() {
  // state of count
  const [count, setCount] = React.useState(parseInt(localStorage.getItem('Count'), 10) || 0); // Getting value from localStorage

  const incrementClick = function () {
    setCount(count + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyComponent, {
    hereIncrement: incrementClick
  }), /*#__PURE__*/React.createElement(MyComponentBrother, {
    hereCount: count
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
