docs.roadmap = `
        <p class="contentText">This ReactJS tutorial includes all of the most recent updates up to version 18.2.0 and covers every topic, from fundamental to advanced. React is the most recommended JavScript library to learn now because of its core foundation of features and large community.</p>
        <h1 class="contentHeading">What is ReactJS?</h1>
        <p class="contentText">ReactJS is an open-source JavaScript library for building dynamic and interactive user interfaces(UIs). React is developed and released by Facebook. Facebook is continuously working on the React library and enhancing it by fixing bugs and introducing new features.</p>
        <h1 class="contentHeading">Who should learn ReactJS?</h1>
        <p class="contentText">This tutorial is prepared for beginners to working professionals who are aspiring to make a career in the field of developing front-end web applications. This tutorial is intended to make you comfortable in getting started with the React concepts with examples.</p>
        <h1 class="contentHeading">Why learn ReactJS?</h1>
        <div class="contentText">
        <p class="contentText">There are several reasons to learn ReactJS, as per the demand in the development industry of React developers and features React has to offer that can not be replaced by other frameworks or libraries.</p>
        <ul>
          <li>
            <strong>Ease of Use:</strong> ReactJS does not require writing lengthy codes as it supports the Components concept so a small amount of code can be created and can be used in multiple places.
          </li>
          <li>
            <strong>Multiple Module Support:</strong> There are so many modules in ReactJS that can be used to make your development more scalable, and manageable at a fast pace.
          </li>
          <li>
            <strong>Multiple Apps Development:</strong> By using React knowledge we can create Web Pages, Web Apps, Mobile Apps, and VR Apps. There are a lot of websites that are using ReactJS like Airbnb, Cloudflare, Facebook, Instagram, etc.
          </li>
          <li>
            <strong>Easy Migration:</strong> Because of its easy learning curve migration from other technologies became so easy. There are tons of resources to learn ReactJS from basics to advanced.
          </li>
          <li>
            <strong>Large Community:</strong> ReactJS has one of the largest communities to help you when you are in trouble debugging your codes or get stuck learning new things.
          </li>
        </ul>
      </div>
      <h1 class="contentHeading">ReactJS Example Code</h1>
      <p class="contentText">As this is sample code without the environment setup this code will not work to set up the ReactJS environment check ReactJS Installation article.</p>
      <div class="code-container">
  <button class="copy-button" onclick="copyCode()">Copy</button>
  <pre><code id="reactCode">
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> ReactDOM <span class="keyword">from</span> <span class="string">'react-dom/client'</span>;

<span class="keyword">function</span> <span class="function-name">Greeting</span>(props) {
  <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello World!!<span class="tag">&lt;/h1&gt;</span>;
}

<span class="keyword">const</span> container = document.getElementById(<span class="string">"root"</span>);
<span class="keyword">const</span> root = ReactDOM.createRoot(container);
root.render(<span class="tag">&lt;Greeting /&gt;</span>);
  </code></pre>
</div>
<h1 class="contentHeading">Features of ReactJS</h1>
<div class="contentText">
<p class="contentText">ReactJS plays an essential role in the front-end ecosystem. There are so many important features of ReactJS as it is the most demanding library for front-end development.</p>
<ul>
          <li>
            <strong>Virtual DOM:</strong> Virtual DOM is a special kind of DOM that is used in ReactJS. Virtual DOM represents the real DOM of the current HTML document. Whenever there is a change in the HTML document, React checks the updated virtual DOM with the previous state of the Virtual DOM and updates only the difference in th actual/real DOM.
          </li>
          <li>
            <strong>Reusable Components:</strong> Components need to be written a single time and can be used multiple times by just calling that component where we require that component.
          </li>
          <li>
            <strong>One-Way Data Binding:</strong> One-way data binding prevents the data in a component from flowing backward. A component can pass the data to its child component only. This will simplify the data handling and reduce the complexity.
          </li>
        </ul>
</div>
<p class="contentText">To know more about the features of ReactJS please check ReactJS Features article.</p>
<h1 class="contentHeading">Prerequisites to Learn ReactJS</h1>
<p class="contentText">Before proceeding with this tutorial, we assume that the readers have the basic knowledge in HTML, CSS and JavaScript concepts.</p>
<h1 class="contentHeading">Getting Started with ReactJS</h1>
<p class="contentText">To get started with ReactJS we need to clear our fundamentals first before proceeding into complex topics. We will recommend you to code along with each article you read this will help you to understand the concepts. If you can create a project along with your learning that will be more helpful.</p>
<h2 class="subHeading">Basics of ReactJS</h2>
`;