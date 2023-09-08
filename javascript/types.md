<h2>Prmitive Types</h2>
<ol>
  <li>String</li> 
  <li>Number</li>
  <li>Boolean</li>
  <li>null</li>
  <li>undefined</li>
</ol>
<br>
These primitive data types are stored in <b>call-stack</b> memory.
<hr>
<h2>Reference Types</h2>
<ol>
  <li>Array</li>
  <li>Object</li>
  <li>Function</li>
</ol>
<br>
These reference data types are stored in <b>heap</b> memory.

When an object is declared as follow:

```
const obj = { name: 'Cho', id: 1 };
obj.gender = 'male';
console.log(obj); // {name:'cho',id:1,gender:'male'}
```
<br>
It is because the factor which decides whether it is changed is <b>NOT</b> the value of data, but the value of call-stack.
