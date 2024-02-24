# Learning ReactJS
## Practice Repository

#### Things I've learnt so far:

* Installing and setting up the react environment:
    I install **React** by typing ```npx create-react-app``` in my command prompt
* **React** Props:
    Props are short for _properties_, they are values passed down by _parent components_ to their _children components_
* **React** State:
    State is like the _memory_ of the **React App**, it stores data that can be changed later by an event or action
    ``` javascript
    function App() {
      const [count, setCount] = useState(0);
      function handleSetCount() {
        setCount((val) => val + 1)
      }
    return <p>{count}</p>
    }
    ```

Every progress I make in learning __ReactJS__ will be stored in this repository for future references.
I will also include links to other repositories containing any project I worked on using **ReactJS**

```javascript
function X() {
  return <h1>Hi I am X, and this is <b>My React Repo</b></h1>;
}
```

### Projects I have built in the process of learning:
* [Eat 'n Split](https://github.com/SimpleX-T/Eat-n-Split)
