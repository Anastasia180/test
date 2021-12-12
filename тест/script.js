var quiz = {
  user: "Dave",
  questions: [
  {
    text: "Управляющей конструкцией html документа называется:",
    responses: [
    { text: "Атрибут" },
    { text: "Тег", correct: true },
    { text: "Значение" },
    { text: "Понятие" }] },


  {
    text: "С какой пары тегов начинается и заканчивается HTML документ?",
    responses: [
    { text: "HTML", correct: true },
    { text: "WEB" },
    { text: "HEAD" },
    { text: "BODY" }] },


  {
    text: "Какие принципы используются, чтобы сделать ресурс доступным в Интернете?",
    responses: [
    { text: "Унифицированная схема наименований" },
    { text: "Протокол HTTP", correct: true },
    { text: "Язык разметки гипертекст" },
    { text: "Нет правильного ответа" }] },


  {
    text: "Какая из данных записей является адресом веб-сайта?",
    responses: [
    { text: "E-Mail Client"  },
    { text: "Www.rnd.runnet.ru", correct: true },
    {
      text: "Ros_sh@vitebsk.by" },

    { text: "Petroff@ya ndex.ru" }] },


  {
    text: "Каково назначение сервиса Интернета WWW?",
    responses: [
    { text: "Передача файлов через Интернет" },
    {
      text: "Получение файлов через Интернет" },

    { text: "Получение информации в виде веб-страниц", correct: true },
    { text: "Обмен сообщениями через Интернет" }] },


  {
    text:
    "Протокол HTTP служит для:",
    responses: [
    { text: "Передачи файлов" },
    { text: "Управления передачи сообщениями" },
    { text: "Передачи гипертекста", correct: true },
    { text: "Запуска программы с удаленного компьютера" }] },


  {
    text: "Компьютер, подключенный к сети Internet, обязательно имеет:",
    responses: [
    { text: "IP-адрес", correct: true },
    { text: "URL-адрес" },
    {
      text: "WEB-страницу" },

    { text: "Нет правильного ответа" }] },


  {
    text: "Какие единицы измерения могут использоваться для атрибута ширины? ",
    responses: [
    { text: "Миллиметры и сантиметры" },
    { text: "Пиксели и %", correct: true },
    { text: "Пиксели и миллиметры" },
    { text: "Нет правильного ответа" }] },


  {
    text:
    "Как расшифровывается HTML?",
    responses: [
    {
      text: "Hyper text marking language" },

    { text: "Hyphenation text markup language " },
    { text: "Hyper text markup language", correct: true },
    { text: "Hyphenation test marking language" }] },


  {
    text: "В HTML не существует … тегов",
    responses: [
    { text: "Одиночных" },
    { text: "Тройных", correct: true },
    { text: "Парных" },
    { text: "Нет правильного ответа" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });