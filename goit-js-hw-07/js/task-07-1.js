'use strict';

import quiz from './quiz-data.js';

const { questions, title } = quiz;

// // Создаем HTML заголовка
// const createTestTitle = function createTestTitle(titleText) {
//   const preparedTitle = `<h1 class="title-quiz">${titleText}</h1>`;
//   return preparedTitle;
// };

// // Подготоваить варианты ответа
// const createAnsver = (choices, itrQvestion) => choices
//   .map((choic, iter) => {
//     const ansverHtml = `<li>
//       <input type="radio" value="${iter}" id="test-${itrQvestion}-${iter}" name="radio-group${itrQvestion}" />
//       <label for="test-${itrQvestion}-${iter}" class="js-answer-${itrQvestion}">${choic}</label>
//       </li>`;
//     return ansverHtml;
//   })
//   .join('');

// // передаем обект возваращаем HTML вопроса
// const createQuestion = function CreateQuestion({ question, choices }, itrQvestion) {
//   const preparedQuestion = `<li><section class="js-qvestion-${itrQvestion}">
//     <h3>${question}</h3>
//     <ol>
//       ${createAnsver(choices, itrQvestion)}
//     </ol>
//   </section></li>`;
//   return preparedQuestion;
// };

// // Создаем единую строку с вопросами теста
// const createAllQuestion = function createAllQuestion(quest) {
//   const QuestionList = quest
//     .map((question, itrQvestion) => createQuestion(question, itrQvestion))
//     .join('');
//   const preparedQuestionList = `<ul class="same-question">${QuestionList}</ul>`;
//   return preparedQuestionList;
// };

// // Отривовывает тес в DOM
// const pushQuizInHtml = function pushQuizInHtml(titleQuiz, quizHtml) {
//   const quizEll = document.querySelector('.js-quiz-form');
//   const preparedHtml = titleQuiz + quizHtml;
//   quizEll.insertAdjacentHTML('afterbegin', preparedHtml);
// };

// pushQuizInHtml(createTestTitle(title), createAllQuestion(questions));

// // ======== Validation Form ===========

// const getСorrectAnswers = function getСorrectAnswers(objectQuestion) {
//   const СorrectAnswers = objectQuestion.map(({ answer }) => answer);
//   return СorrectAnswers;
// };

// getСorrectAnswers(questions);

// const answerValidation = function answerValidation(DataArr) {
//   const correctAnswers = getСorrectAnswers();
//   console.log(correctAnswers);

//   for (let i = 0; i < correctAnswers.length; i += 1) {
//     if (DataArr.hasOwnProperty(`radio-group${i}`)) {
//       console.log('Ура');
//     } else {
//       const unansweredQuestion = document.querySelector(`.js-qvestion-${i}`);
//       unansweredQuestion.classList.add('empty-answer');
//       console.log(unansweredQuestion);
//     }
//   }
// };

// getСorrectAnswers(questions);
// const henddlSubmit = function henddlSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   const formDataObj = {};
//   formData.forEach((val, key) => {
//     formDataObj[key] = val;
//   });
//   answerValidation(formDataObj);
// };

// const quizForm = document.querySelector('.js-quiz-form');
// quizForm.addEventListener('submit', henddlSubmit);


//-------------------


// Создаем HTML заголовка
const createTestTitle = function createTestTitle(titleText) {
  const preparedTitle = `<h1 class="title-quiz">${titleText}</h1>`;
  return preparedTitle;
};

// Подготоваить варианты ответа
const createAnsver = (choices, itrQvestion) => choices
  .map((choic, iter) => {
    const ansverHtml = `<li>
      <input type="radio" value="${iter}" id="test-${itrQvestion}-${iter}" name="radio-group${itrQvestion}" />
      <label for="test-${itrQvestion}-${iter}" class="js-answer-${itrQvestion}">${choic}</label>
      </li>`;
    return ansverHtml;
  })
  .join('');

// передаем обект возваращаем HTML вопроса
const createQuestion = function CreateQuestion({ question, choices }, itrQvestion) {
  const preparedQuestion = `<li><section class="js-qvestion-${itrQvestion}">
    <h3>${question}</h3>
    <ol>
      ${createAnsver(choices, itrQvestion)}
    </ol>
  </section></li>`;
  return preparedQuestion;
};

// Создаем единую строку с вопросами теста
const createAllQuestion = function createAllQuestion(quest) {
  const QuestionList = quest
    .map((question, itrQvestion) => createQuestion(question, itrQvestion))
    .join('');
  const preparedQuestionList = `<ul class="same-question">${QuestionList}</ul>`;
  return preparedQuestionList;
};

// Отривовывает тес в DOM


// ======== Validation Form ===========

const getСorrectAnswers = function getСorrectAnswers(objectQuestion) {
  const СorrectAnswers = objectQuestion.map(({ answer }) => answer);
  return СorrectAnswers;
};

const answerValidation = function answerValidation(DataArr) {
  const correctAnswers = getСorrectAnswers();
  console.log(correctAnswers);

  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (DataArr.hasOwnProperty(`radio-group${i}`)) {
      console.log('Ура');
    } else {
      const unansweredQuestion = document.querySelector(`.js-qvestion-${i}`);
      unansweredQuestion.classList.add('empty-answer');
      console.log(unansweredQuestion);
    }
  }
};

const henddlSubmit = function henddlSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formDataObj = {};
  formData.forEach((val, key) => {
    formDataObj[key] = val;
  });
  answerValidation(formDataObj);
};

const quizForm = document.querySelector('.js-quiz-form' );
quizForm.addEventListener('submit', henddlSubmit);


// final draw

const pushQuizInHtml = function pushQuizInHtml(titleQuiz, quizHtml, questionsArray) {
  const quizEll = document.querySelector('.js-quiz-form');
  const preparedHtml = titleQuiz + quizHtml;
  quizEll.insertAdjacentHTML('afterbegin', preparedHtml);

  getСorrectAnswers(questionsArray);
};

pushQuizInHtml(createTestTitle(title), createAllQuestion(questions), questions);
