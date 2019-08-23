'use strict';

import test from './quiz-data.js';

// Создаем HTML заголовка
function createTestTitle(titleText) {
  return `<h1 class="title-quiz">${titleText}</h1>`;
}

// Подготавливаем HTML теста к вставке на страницу
function createTestHtml(questions) {
  const html = questions
    .map(
      (quest, iner) => `
    <li>
      <section class="js-qvestion-${iner}">
        <h3>${quest.question}</h3>
        <ol>
          ${createQuestion(quest, iner)}
        </ol>
      </section>
    </li>`,
    )
    .join('');
  return `<ul class="same-question">${html}</ul>`;
}

// Подготавливаем HTML списка вопросов
function createQuestion({ choices }, itrQvestion) {
  return choices
    .map(
      (choic, iter) => `<li>
    <input type="radio" value="${iter}" id="test-${itrQvestion}${iter}" name="radio-group${itrQvestion}" />
    <label for="test-${itrQvestion}${iter}" class="js-answer-${itrQvestion}${iter}">${choic}</label>
    </li>`,
    )
    .join('');
}

// вставка теста с обекта на страницу.
function drawHtml({ title, questions }) {
  const allPreparedHtml = createTestTitle(title) + createTestHtml(questions);
  const quizEll = document.querySelector('.js-quiz-form');
  quizEll.insertAdjacentHTML('afterbegin', allPreparedHtml);
}

drawHtml(test);

// ======== Validation Form ===========

// Проверка результатов теста
function answerValidation(dataArr, objectTest) {
  const { questions } = objectTest;
  const correctAnswers = questions.map(({ answer }) => answer);
  console.log(correctAnswers);
  let sumCorectAnswer = 0;

  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (dataArr.hasOwnProperty(`radio-group${i}`)) {
      if (dataArr[`radio-group${i}`] === correctAnswers[i]) {
        document
          .querySelector(`.js-answer-${i}${correctAnswers[i]}`)
          .classList.add('correctAnswer');
        sumCorectAnswer += 1;
      } else {
        const querySelector = `.js-qvestion-${i} input[type=radio]:checked+label`;
        document.querySelector(querySelector).classList.add('falseAnswer');
      }
    } else {
      const unansweredQuestion = document.querySelector(`.js-qvestion-${i}`);
      unansweredQuestion.classList.add('empty-answer');
    }
  }
  const unChecked = document.querySelectorAll('.same-question input[type=radio], .js-btn-quiz');
  unChecked.forEach(input => input.setAttribute('disabled', 'disabled'));

  outputResult(correctAnswers.length, sumCorectAnswer);
}

// Подсчет и вывод результатов теста
function outputResult(numberOfQestions, numberOfCorrectAnswers) {
  let resultPercent = (100 / numberOfQestions) * numberOfCorrectAnswers;
  resultPercent = Math.round(resultPercent);
  let messageTitle;
  let classResult;
  if (resultPercent > 80) {
    messageTitle = 'Вы прошли тест успешно!';
    classResult = 'grean-text-number';
  } else {
    messageTitle = 'Tест не пройден';
    classResult = 'red-text-number';
  }
  const htmlResult = `<h3 class="result-test-title number" >${messageTitle}</h3>
  <p class="result-points">набрали <span class="number">${resultPercent}</span> балов</p>
  <p class="result-statistic">
    правильных ответов
    <span class="number">${numberOfCorrectAnswers}</span> из
    <span class="number">${numberOfQestions}</span>
  </p>`;
  const moalWind = document.querySelector('.modal-result');
  moalWind.classList.add('open-modal', classResult);
  moalWind.querySelector('.modal-window').insertAdjacentHTML('afterbegin', htmlResult);

  const buttonModal = '<button class="btn js-open-modal" type="submit">Результаты</button>';
  moalWind.insertAdjacentHTML('beforebegin', buttonModal);
  modalWindows();
}

// открытие окна
function openModal() {
  document.querySelector('.modal-result').classList.add('open-modal');
  window.addEventListener('keydown', handlKeyPress);
}
// закрытие окна
function closeModal() {
  document.querySelector('.modal-result').classList.remove('open-modal');
  window.removeEventListener('keydown', handlKeyPress);
}
// Колбек для keydown
function handlKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

//  Открытие / Закрытие модального окна результатов
function modalWindows() {
  const openModalBtn = document.querySelector('.js-open-modal');
  const closeModalResult = document.querySelector('.close-modal-result');
  const backdrop = document.querySelector('.wrap-result');
  backdrop.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  });
  closeModalResult.addEventListener('click', closeModal);
  openModalBtn.addEventListener('click', openModal);
}

//  Создаем специальную функцию которая выбирает элемент
//  и получает своим параметром обект с вопросами и ответами
//  чтобы не обращатся с слушателя к глобальной переменной!
//  так же вызывает все функции проверки и вывода результата.
function testСheck(objectTest) {
  const quizForm = document.querySelector('.js-quiz-form');
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObj = {};
    formData.forEach((val, key) => {
      formDataObj[key] = Number(val);
    });
    answerValidation(formDataObj, objectTest);
  });
}


testСheck(test);
