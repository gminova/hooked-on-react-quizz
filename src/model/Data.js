const Data = [
  {
    id:1,
    question: "What does React Strict Mode do?",
    answers: [
      {
        id:11,
        text:
          "It activates additional checks and warnings for its descendants.",
        isCorrect: true
      },
      {
        id:12,
        text:
          "It eliminates some silent errors by changing them to throw errors.",
        isCorrect: false
      },
      {
        id:13,
        text: "It helps with maintaining backward compatibility.",
        isCorrect: false
      }
    ]
  },
  {
    id:2,
    question:
      "What are the names of the two main functions used for SSR from ReactDOMServer and ReactDOM?",
    answers: [
      {
        id:21,
        text: "ReactDOMServer.renderToHTML() and ReactDOM.render()",
        isCorrect: false
      },
      {
        id:22,
        text: "ReactDOMServer.renderToMarkup() and ReactDOM.create()",
        isCorrect: false
      },
      {
        id:23,
        text: "ReactDOMServer.renderToString() and ReactDOM.hydrate()",
        isCorrect: true
      }
    ]
  },
  {
    id:3,
    question:
      "Select the correct regarding shallow rendering in React?",
    answers: [
      {
        id:31,
        text: "It lets you render a component one level deep",
        isCorrect: true
      },
      {
        id:32,
        text: "It is dependant on the behavior of child components",
        isCorrect: false
      },
      {
        id:33,
        text: "It requries the DOM",
        isCorrect: false
      }
    ]
  }
];

export default Data;
