<template>
  <div class="projects">
    <div class="row mb-3">
      <h2>Projects</h2>
    </div>
    <div class="row mb-3">
      <div class="col-3">Jan 2020</div>
      <div class="col-7">
        <b>SamurAI</b> <br />
        <ul>
          <li>
            Developed in 24 hours a web game where two teams compete to name the
            top intepretations of images by an Artificial Intelligence
          </li>
          <li>
            Built using Vue.js, Node.js and Microsoft Azure Computer Vision
          </li>
        </ul>
      </div>
      <div class="col-2">Team of 4</div>
    </div>
    <div class="row mb-3">
      <div class="col-3">Mar 2019 - Apr 2019</div>
      <div class="col-7">
        <b>Tetris clone</b> <br />
        <ul>
          <li>
            Implemented a classic Tetris clone that is playable in a web browser
          </li>
          <li>
            Written in a pure functional programming language (Elm)
          </li>
        </ul>
      </div>
      <div class="col-2">Individual</div>
    </div>
    <div class="row mb-3">
      <div class="col-3">Jan 2019 - Feb 2019</div>
      <div class="col-7">
        <b>Todos app</b>
        <ul>
          <li>
            Developed a web application using Ruby on Rails to manage daily
            tasks and reminders
          </li>
          <li>
            Implemented tagging and marking complete/incomplete on top of basic
            CRUD functions
          </li>
        </ul>
      </div>
      <div class="col-2">Individual</div>
    </div>
    <div class="row mb-3">
      <div class="col-3">Aug 2018 - Nov 2018</div>
      <div class="col-7">
        <b>Heart²</b><br />
        NUS CS2103T software engineering project
        <ul>
          <li>
            Morphed an existing address book desktop application written in Java
            into a wedding event management system
          </li>
          <li>
            Integrated core CRUD functions for a new resource used by the
            application
          </li>
          <li>
            Implemented a command parser to parse and identify all commands
            entered by the user
          </li>
        </ul>
      </div>
      <div class="col-2">Team of 5</div>
    </div>
    <div class="row mb-3">
      <div class="col-3">May 2018 - Aug 2018</div>
      <div class="col-7">
        <b>Word Fight: Multiplayer Game</b><br />
        NUS School of Computing ‘Orbital’ Project 2018
        <ul>
          <li>
            Developed a multiplayer android word game in Java
          </li>
          <li>
            Applied web scraping using Selenium with Python to obtain data used
            for the game
          </li>
          <li>
            Awarded Best Project among over 400 other participants
          </li>
        </ul>
      </div>
      <div class="col-2">Team of 2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style scoped>
h2 {
  font-size: 2.5em;
}
</style>
