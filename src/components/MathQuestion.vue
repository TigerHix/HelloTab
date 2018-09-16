<template>
  <card>
    <div slot="title">Math Question</div>
    <div id="math-quesion" class="mb-3 mx-3" style="z-index:100; position: relative;">
      <h4 style="z-index:100;">Score: {{score}}</h4>
      <h4 style="z-index:100;">Timer: {{timer}}</h4>
      <p id="mathQuestion" v-html="question" class="h3 mb-3"></p>
      <div class="mb-2" style="z-index:100;" v-for="(choice, index) in choices">
        <button class="btn btn-sm btn-primary btn-block" style="z-index:100;" v-html="choice" @click="checkAnswer(index)"></button>
      </div>
      <b-button-group style="width:100%;">
        <b-button variant="outline-light col" @click="btn1Function" :disabled="!canRequestQuestion">{{btn1Text}}</b-button>
        <button class="btn btn-outline-primary btn-block col" @click="btn2Function">{{btn2Text}}</button>
      </b-button-group>
    </div>
  </card>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card'
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
      choices: ["-", "-", "-", "-", "-"],

      tempQ: "",
      tempC: [],
      tempT: 0,

      timer: 0,
      score: 0,

      btn1Text: "-",
      btn2Text: "Start Challenge",
      btn1State: 0,                 // 0 = "-", 1 = "Quit"
      btn2State: 0,                 // 0 = "Start", 1 = "Pause", 2 = "Resume"
    }
  },
  methods: {
    btn1Function() {
      switch(this.btn1State) {
        case 0:
          break;
        case 1:
          this.quitChallenge();
          this.question = "";
          this.choices = ["-", "-", "-", "-", "-"];
          break;
      }
    },

    btn2Function() {
      switch(this.btn2State) {
        case 0:
          this.startChallenge();
          break;
        case 1:
          this.pauseChallenge();
          break;
        case 2:
          this.resumeChallenge();
          break;
      }
    },

    startChallenge() {
      this.timer = 30;
      this.getQuestion();
      this.mainLoop();
      this.score = 0;
      this.btn1State = 1;
      this.btn2State = 1;
      this.btn1Text = "Quit";
      this.btn2Text = "Pause";
      // set btn 2 function to pauseChallenge()
    },

    pauseChallenge() {
      this.tempQ = this.question;
      this.tempC = this.choices;
      this.tempT = this.timer;
      this.question = "";
      this.choices = ["-", "-", "-", "-", "-"];
      this.timer = -1;
      this.btn2State = 2;
      this.btn2Text = "resume";
      // change btn2 function to resumeChallenge
    },

    resumeChallenge() {
      this.question = this.tempQ;
      this.choices = this.tempC;
      this.timer = this.tempT;
      this.btn2State = 1;
      this.btn2Text = "Pause";
      this.mainLoop();
      // change btn2 function to pauseChallenge
    },

    quitChallenge() {
      this.btn1State = 0;
      this.btn2State = 0;
      this.btn1Text = "-";
      this.btn2Text = "Start Challenge";
      this.timer = 0;
    },

    mainLoop() {
      if (this.timer > 0) {
        this.timer -= 1;
        var x = setTimeout(() => { this.mainLoop(); }, 1000);
      }
      else if (this.timer == 0) {
        this.btn1Text = "-";
        this.btn2Text = "Start Challenge";
        this.btn1State = 0;
        this.btn2State = 0;
        this.question = "";
        this.choices = ["-", "-", "-", "-", "-"];
        window.alert("Challenge over! Score: " + this.score);
      }
    },

    getQuestion() {
      if(this.canRequestQuestion == true) {
        this.choices = [];
        axios.get('https://math.ly/api/v1/algebra/linear-equations.json?difficulty=beginner')
        .then(response => {
          this.question = response.data.question;
          this.correct = response.data.correct_choice;
          var providedChoices = response.data.choices;
          for(var i = 0; i < providedChoices.length; i++) {
            this.choices.push(providedChoices[i]);
          }
        })
        this.canRequestQuestion = false;
        setTimeout (()=>{ this.canRequestQuestion = true; }, 1500);
      }
    },

    checkAnswer(index) {
      var correctAnswer = this.correct;
      console.log("Index: " + index);
      console.log("Correct Answer: " + correctAnswer);
      if (index == correctAnswer) {
        this.score += 1;
        console.log("correct!");
      }
      this.getQuestion();
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
