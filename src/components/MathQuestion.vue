<template>
  <card>
    <h4>Score: {{score}}</h4>
    <h4>Timer: {{timer}}</h4>
    <p id="mathQuestion" v-html="question" class="h3 mb-3"></p>
    <div class="mb-2" v-for="(choice, index) in choices">
      <button class="btn btn-primary btn-block" v-html="choice" @click="checkAnswer(index)"></button>
    </div>
    <b-button-group style="width:100%;">
      <b-button variant="outline-dark col" @click="" :disabled="!canRequestQuestion">{{btn1Text}}</b-button>
      <button class="btn btn-outline-primary btn-block col" @click="startChallenge">{{btn2Text}}</button>
    </b-button-group>
  </card>
</template>
<script>
import axios from 'axios'
import Card from '@/components/MathQuestionCard'
export default {
  name: 'home',

  components: {
    Card
  },

  data() {
    return {
      canRequestQuestion: true,

      correct: 0,
      question: "",
      choices: [],

      tempQ: "",
      tempC: [],

      timer: 0,
      score: 0,

      btn1Text: "-",
      btn2Text: "Start Challenge",
    }
  },
  methods: {
    startChallenge() {
      this.timer = 30;
      this.getQuestion();
      this.mainLoop();
      this.btn1Text = "Quit";
      this.btn2Text = "Pause";
      // set btn 2 function to pauseChallenge()
    },

    pauseChallenge() {
      this.tempQ = this.question;
      this.tempC = this.choices;
      this.question = "";
      this.choices = [];
      this.btn2Text = "resume";
      // change btn2 function to resumeChallenge
    },

    resumeChallenge() {
      this.question = this.tempQ;
      this.choices = this.tempC;
      this.btn2Text = "Pause";
      // change btn2 function to pauseChallenge
    },

    quitChallenge() {
      this.timer = 0;
    },

    mainLoop() {
      if (this.timer > 0) {
        this.timer -= 1;
        var x = setTimeout(() => { this.mainLoop(); }, 1000);
      }
    },

    getQuestion() {
      if(this.canRequestQuestion == true) {
        this.choices = [];
        axios.get('https://math.ly/api/v1/algebra/linear-equations.json')
        .then(response => {
          this.question = response.data.question;
          this.correct = response.data.correct_choice;
          var providedChoices = response.data.choices;
          for(var i = 0; i < providedChoices.length; i++) {
            this.choices.push(providedChoices[i]);
          }
        })
        this.canRequestQuestion = false;
        setTimeout (()=>{ this.canRequestQuestion = true; }, 3000);
      }
    },

    checkAnswer(index) {
      var correctAnswer = this.correct;
      console.log(correctAnswer);
      // console.log(index);
      // for(var i = 0; i < this.choices.length(); i++) {
      //
      // }
      // console.log(choice);
    }
  },

  mounted() {
    /*
    var mathJaxScript = document.createElement('script');
    twitterFeedScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML');
    document.head.appendChild(mathJaxScript);
    */
  },
}
</script>
