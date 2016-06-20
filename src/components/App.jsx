import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      questions: [
          { id: 1,
            text: 'What is your name?',
            choices: [
              {
                id: 'a',
                text: 'Jamie'
              },
              {
                id: 'b',
                text: 'Charlize'
              },
              {
                id: 'c',
                text: 'Lisa'
              },
              {
                id: 'd',
                text: 'Edwin'
              }
            ],
            correct: 'b'
          },

          {id: 2,
          text: 'What is your moms name?',
          choices: [
            {
              id: 'a',
              text: 'Helen'
            },
            {
              id: 'b',
              text: 'Beth'
            },
            {
              id: 'c',
              text: 'Destiny'
            },
            {
              id: 'd',
              text: 'Theresa'
            }
          ],
          correct: 'c'
        },
        { id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Charles'
            },
            {
              id: 'b',
              text: 'Bob'
            },
            {
              id: 'c',
              text: 'Dave'
            },
            {
              id: 'd',
              text: 'Thurgood'
            }
          ],
          correct: 'd'
        },
        { id: 4,
          text: 'What is your siblings name?',
          choices: [
            {
              id: 'a',
              text: 'Enrique'
            },
            {
              id: 'b',
              text: 'Daniel'
            },
            {
              id: 'c',
              text: 'Jeff'
            },
            {
              id: 'd',
              text: 'Pips'
            }
          ],
          correct: 'a'
        }
      ],

      score: 0,

      current: 1
    }
  }

  render(){
    return(
      <div>
        <QuestionList {...this.state}/>
      </div>
    )
  }

}

export default App
