
import React from 'react';
import { useState } from 'react';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imagSize: 90,
};
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
function MyButton()
{
  return (
    <button>I am a button </button>
  );
}
function AboutPage()
{
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br /> How do you do?</p>
      {/* <img className='avatar' /> */}
    </>
  );
}
function Profile()
{
  return (
    <>
      <h1>{user.name}</h1>
      <img className='avatar'
        src={user.imageUrl}
        alt={'Logo of Urban Avenues' + user.name}
        style={{
          width: user.imagSize,
          height: user.imagSize,
        }}
      />
    </>
  );
}
function AdminPanel()
{
  return (
    <>
      <div className='AdminPanel'>
        <h1>Welcome to AdminPanel</h1>
        <p>i am here addmin page</p>

      </div>
    </>
  );
}
function LoginForm()
{
  return (
    <>
      <div className='LoginForm'>
        <h1>Welcome to login form page</h1>
      </div>
    </>
  );
}
function CheckPageStatus()
{
  // javascripts code
  let content;
  let isLoggedIn = 0; // to change values true or false (1 or 0 ) then show login pannel
  /*  if (isLoggedIn)
  {
    content = <AdminPanel />;
  } else
  {
    content = <LoginForm />;
  }
  return (
    <>
      <div>{content}</div>
    </>
  ); */
  // JSX code 
  return (
    <div>{isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}</div>
  );
}
//Rendering Lists
function RenderingLists()
{
  const ListItems = products.map(product =>
    <li key={product.id} id={product.id}>{product.title}</li>
  );
  return (
    <>
      <ul>{ListItems}</ul>

    </>
  );
}
// if items list show fruits is other color and rest is any other color?
const products_color = [
  { title: 'Cabbage', isFruits: false, id: 1 },
  { title: 'Garlic', isFruits: false, id: 2 },
  { title: 'Apple', isFruits: true, id: 3 },
];

function ShoppingList()
{
  const ListItems_color = products_color.map(product_cr =>
    <li
      key={product_cr.id}
      style={{
        color: product_cr.isFruits ? 'magenta' : 'darkgreen'
      }}
    >
      {product_cr.title}
    </li>
  );
  return (
    <>
      <div className='listbg'>
        <ul>{ListItems_color}</ul>
      </div>
    </>
  );
}
//Responding to event handler function example
function EventHanling()
{
  function handleCick()
  {
    alert("You Clicked me!");
    console.log("Clicked done!");
  }
  return (
    <>
      <h1> Event handler function example</h1>
      <button onClick={handleCick} className='buttonstyle'>Click me</button>
    </>
  );
}
//Updating the screen using useState example
function UpdateScreenData()
{
  const [count, setCount] = useState(0);
  function CountButtonClick()
  {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Updating the screen using useState example</h1>
      <button className='buttonstyle'
        onClick={CountButtonClick}
      >
        Count <span className='countcolor'>{count}</span>
      </button>
    </>
  );
}

//Sharing data between components
function JsxMyButton()
{
  const [count, setCount] = useState(0);
  function handleCicks()
  {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Sharing data between components</h1>
      <MyButton_s count={count} onClick={handleCicks} />
      <MyButton_s count={count} onClick={handleCicks} />
    </>
  );
}
function MyButton_s({ count, onClick })
{
  return (
    <>
      <button onClick={onClick} className='buttonstyle'>
        Clicked <span style={{ color: 'red', fontSize: '24px', padding: '2px' }}>{count}</span> times
      </button>
    </>
  );
}

//Tic-tac-toe

function Square({ value, onSquareClick }) 
{

  /* function handleClick()
  {
    console.log("Clicked");
   setValue("X");
  } */
  return (<button className='square'
    onClick={onSquareClick}
  >
    {value}
  </button>);
}

function TicTacToe({ xIsNext, squares, onPlay })
{
  /* const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); */

  function handleClick(i)
  {
    if (squares[i] || calculateWinner(squares))
    {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext)
    {
      nextSquares[i] = "X";
    } else
    {
      nextSquares[i] = "0";
    }
    /* setSquares(nextSquares);
    setXIsNext(!xIsNext); */

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner)
  {
    status = 'Winner : ' + winner;
  } else
  {
    status = 'Next player : ' + (xIsNext ? 'X' : '0')
  }
  return (
    <>
      <>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          {/* <Square value="1" />
          <Square value="2" />
          <Square value="3" /> */}
        </div>
        <div className='board-row'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          {/* <Square value="4" />
          <Square value="5" />
          <Square value="6" /> */}
        </div>
        <div className='board-row'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          {/* <Square value="7" />
          <Square value="8" />
          <Square value="9" /> */}
        </div>
      </>
    </>
  );
}
function Game()
{
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares)
  {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove)
  {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) =>
  {
    let description;
    if (move > 0)
    {
      description = 'Go to move #' + move;
    } else
    {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <>
      <h1>Tic-tac-toe Example</h1>
      <div className='game'>
        <div className='game-board'>
          <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className='game-info'>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
export default function App()
{
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <CheckPageStatus />
      <RenderingLists />
      <ShoppingList />
      <EventHanling />
      <UpdateScreenData />
      <UpdateScreenData />
      <JsxMyButton />
      <Game />
    </div>
  );
}

function calculateWinner(squares)
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++)
  {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      return squares[a];
    }

  }
  return null;
}