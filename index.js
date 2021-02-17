import a from "./a";
import b from "./b";
import './index.css';
import './index2.css';
import axios from "axios";

// const icon = require('./icon.jpg');
const li = require('./li.jpeg');
console.log(li);

a();
b();

axios.get('/api/info').then(result => {
  console.log(result.data);
});

const btn = document.createElement('button');
btn.innerText = '新增';
document.body.append(btn);

btn.onclick = () => {
  const div = document.createElement('div');
  div.innerText = 'item';
  document.body.appendChild(div);
}