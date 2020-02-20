import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';


function seeRecords(){
  console.log('hello world')
  console.log('hello me')
  
}

function testQuestion(){
  ReactDOM.render(
    <div class='testTemplate'>
      <form>
        <label>
          Question:<br/>
          <textarea type="text" rows='20' cols='70'/>
          <textarea type="text" name="name" rows='20' cols='70'/><br/>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>, document.getElementById('question')
  )
}

function addQuestion(state){
  ReactDOM.render(
    <div class='questionTemplate'>
        <label>
          Question:<br/>
          <textarea id='invQuestion' type="text" rows='20' cols='70'/>
          <textarea id='invAnswer' type="text" name="name" rows='20' cols='70'/><br/>
          <input type="submit" value="Submit" onClick={()=>saveQuestion()} />
        </label>
    </div>, document.getElementById('question')
  )
}

function saveQuestion(){
  var que = document.getElementById('invQuestion').value
  var ans = document.getElementById('invQuestion').value
  document.getElementById('invQuestion').value = null
  document.getElementById('invAnswer').value = null
  console.log(que)
  console.log(ans)
}

function App() {
  return (
    <div>
      <button onClick={()=>addQuestion('add')}>Add Question</button>
      <button onClick={()=>testQuestion()}>Test Question</button>
      <button onClick={()=>seeRecords()}>See Records</button>
      <div id='question'>
      </div>
    </div>
  );
}

export default App;
