/*
---------> Lesson 1 - Rendering a Component

class RobotBox extends React.Component {
  render() {
    return <div>Hello From React</div>;
  }
}

let target = document.getElementById('robot-app');

ReactDOM.render( <RobotBox/>, target );


---------> Lesson 2 - JSX and Plain JavaScript

class RobotTime extends React.Component {
  render() {
  	const pi = Math.PI;
    return (
      <div className='is-tasty-pie'  >
        The value of PI is approximately {pi}
      </div>
    );
  }
}

---------> Lesson 2 - JSX and Collections

class RobotItems extends React.Component {
  render() {
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Topics I am interested in</h3>
        <ul>
          {topics.map(topic=><li>{topic}</li>)}
        </ul>
      </div>
    );
  }
}

*/