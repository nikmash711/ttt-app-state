'use strict';

//later use different id comvos to see winning solutions
const state = {
  rows: {
    firstRow: [
      {value: '&nbsp;', id: 0},
      {value: '&nbsp;', id: 1},
      {value: '&nbsp;', id: 2},
    ],
    secondRow:[
      {value: '&nbsp;', id: 3},
      {value: '&nbsp;', id: 4},
      {value: '&nbsp;', id: 5},
    ],
    thirdRow: [
      {value: '&nbsp;', id: 6},
      {value: '&nbsp;', id: 7},
      {value: '&nbsp;', id: 8},
    ]
  },
  won: false,
  turnX: true,
  turnO: false
};

// State modification functions

// Render functions

//Generate the string for an empty table that we can then call in render
function generateTable(rows){
  let table = '';
  for (const row in rows){
    console.log(typeof row);
    table+=generateRow(row);
  }
  return table;
}

function generateRow(row){
  //accessing it the wrong way
  return `
  <div class="row">
    <div class="cell" id="${row[0].id}">
      <p>${row[0].value}</p>
    </div>
    <div class="cell" id="${row[1].id}">
      <p>${row[1].value}</p>
    </div>
    <div class="cell" id="${row[2].id}">
      <p>${row[2].value}</p>
    </div>
  </div>
  `;
}

$(function render(){
  let table = generateTable(state.rows);
  $('.board').html(table);
  console.log('in render');
});

// Event Listeners

// Upon loading, I can immediately click cells to alternately place Xs and Os on each click

// I cannot change a cell after it has a value inside it

// I can see when a winning line has been created

// No further moves can be played from this point

// I can click "New Game" at any time to reset the board