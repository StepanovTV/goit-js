'use strict';

const questions = [
  {
    question: 'Что возвращает метод Array.prototype.filter()?',
    choices: [
      'Массив, если результат работы содержит более одного элемента',
      'Один элемент, если только он прошел фильтрацию',
      'Всегда массив',
    ],
    answer: 2,
  },
  {
    question: 'Как получить список всех ключей объекта obj?',
    choices: ['obj.keys()', 'Object.keys(obj)', 'obj.keys', 'Object.getKeys(obj)'],
    answer: 1,
  },
];

function drooHtml(questions) {
  const html = questions
    .map((quest, iner) => {
      const restr = `
      <section>
  <h3>${quest.question}</h3>

  <ol>
    ${quest.choices
    .map(
      (choic, i) => `<li>
      <label>
        <input type="radio" name="choi${iner}" value="${i}" />
        ${choic}
      </label>
    </li>`,
    )
    .join('')}
  </ol>
</section>`;
      return restr;
    })
    .join('');
  const quizEll = document.querySelector('.js-quiz-form');
  quizEll.insertAdjacentHTML('afterbegin', html);
}

const quizForm = document.querySelector('.js-quiz-form');
quizForm.addEventListener('submit', henddlSubmit);

function henddlSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formDataObj = {};
  formData.forEach((val, key) => {
    formDataObj[key] = val;
  });

  console.log(formDataObj);

  choice(formDataObj);
}

// ------------------ test -------------
const choice = (question) => {
  console.log('question', question);
};




drooHtml(questions);
