docs.useState = `
<h1 class="heading">ReactJS - Using useState</h1>
<p class="contentText">useState is a basic React hook, which allows a function component to maintain its own state and re-render itself based on the state changes. The signature of the useState is as follows −</p>
        <div class="code-container">
  <pre><code>
<span class="keyword">const</span> [ <span class="variable">state</span>, <span class="function-name">setState</span> ] = <span class="function-name">useState</span>( <span class="value">initialValue</span> )
  </code></pre>
</div>
<p class="contentText">where,</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>initialValue</strong> − The initial value of the state, which can be of any type (number, string, array, object, etc.).</li>
  <li><strong>state</strong> − A variable that holds the current value of the state.</li>
  <li><strong>setState</strong> − A function that allows updating the state, returned by the <code>useState</code> hook.</li>
</ul>
</div>
<p class="contentText">The signature of the setState function is as follows −</p>
<div class="code-container">
  <pre><code>
<span class="function-name">setState</span>( <span class="value">valueToBeUpdated</span> )
  </code></pre>
</div>
<p class="contentText">Where, valueToBeUpdated is the value to be updated for the state. The sample usage to set and update the user's name is as follows −</p>
<div class="code-container">
  <pre><code>
// initialize the state
<span class="keyword">const</span> [<span class="variable">name</span>, <span class="function-name">setName</span>] = <span class="keyword">useState</span>(<span class="string">'John'</span>);

// update the state
<span class="function-name">setName</span>(<span class="string">'Peter'</span>);
  </code></pre>
</div>
<h1 class="contentHeading">Features</h1>
<div class="contentText">
<p class="contentText">Notable features of useState are as follows −</p>
<p class="contentText"><strong>Function Parameter</strong> − It Accepts a function (returns initial state) instead of initial value and execute the function only once during initial rendering of the component. This will help to improve the performance, if the computation of initial value is expensive.</p>
</div>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> [<span class="variable">val</span>, <span class="function-name">setVal</span>] = <span class="keyword">useState</span>(() => {
   <span class="keyword">var</span> <span class="variable">initialValue</span> = <span class="keyword">null</span>;
   <span class="comment">// expensive calculation of initial value</span>
   <span class="keyword">return</span> <span class="variable">initialValue</span>;
});
  </code></pre>
</div>
<p class="contentText"><strong>Verifies the previous values</strong> − It checks the current and previous value of the state and only if they are different, React renders its children and fires the effects. This will improve performance of the rendering.</p>
<div class="code-container">
  <pre><code>
<span class="comment">// ...</span>
<span class="function-name">setName</span>(<span class="string">'John'</span>) <span class="comment">// update the state and rerender the component</span>
<span class="comment">// ...</span>
<span class="comment">// ...</span>
<span class="function-name">setName</span>(<span class="string">'John'</span>) <span class="comment">// does not fire the rendering of the children because the value of the state have not changed.</span>
<span class="comment">// ...</span>
  </code></pre>
</div>
<p class="contentText"><strong>Batches multiple state updates</strong> − Multiple state updates are batched and processed by React internally. If multiple state update has to be done immediately, then the special function flushSync provided by React can be used, which will immediately flush all the state changes.</p>
<div class="code-container">
  <pre><code>
<span class="function-name">flushSync</span>(<span class="tag">() =></span> <span class="function-name">setName</span>(<span class="string">'Peter'</span>))
  </code></pre>
</div>
<h1 class="contentHeading">Applying state hook</h1>
<div class="contentText">
<p class="contentText">Let us create a login form component and maintain the values of the form using useState hook.</p>
<p class="contentText">First of all, create and start a React application using below commands,</p>
</div>
<div class="code-container">
  <pre><code>
create-react-app myapp
cd myapp
npm start
  </code></pre>
</div>
<p class="contentText">Next, create a react component, LoginForm under component folder (src/components/LoginForm.js)</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> { <span class="keyword">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">export</span> <span class="keyword">default</span> <span class="function-name">function</span> <span class="function-name">LoginForm</span>() { 
   <span class="comment">// render code</span>
}
  </code></pre>
</div>
<p class="contentText">Next, create two state variable, username and password using useState hook as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> { <span class="keyword">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">export</span> <span class="keyword">default</span> <span class="function-name">function</span> <span class="function-name">LoginForm</span>() { 
   <span class="keyword">const</span> [<span class="variable">username</span>, <span class="variable">setUsername</span>] <span class="keyword">=</span> <span class="function-name">useState</span>('') 
   <span class="keyword">const</span> [<span class="variable">password</span>, <span class="variable">setPassword</span>] <span class="keyword">=</span> <span class="function-name">useState</span>('') 
   
   <span class="comment">// render code</span>
}
  </code></pre>
</div>
<p class="contentText">Next, create a function to validate the login data as shown below −</p>


`;
