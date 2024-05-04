# NodeVueProject
Node.js (api-project) , Vue.js (web-project)

npm install -g @vue/cli :: vue installed globally 

files :: components (in vue.js)

template :: browser(html / bootstrap)

script :: js
style :: style(css)


2 main folders :: api-project and web-project
Node (api-project) dependencies ::
      npm i body-parser ::
      npm i cors :: security policy check (handle request from 8080 to 3000 or vice-versa)
      npm i express
      npm i mongoose :: db connectivity and stores data 
Vue (web-project) dependencies ::
      npm i axios :: takes request from vue and send to node , then takes response from node and send to vue
      npm i core-js :: for vue
      npm i vue  :: for vue
      npm i vue-router :: to handle routes 

node.js -> routes :: operations perform (CRUD) :: express.Router() :: npm i express
vue.js -> routes ::  page render (/signup , /home) :: npm i vue-router

createRouter , createWebHistory are two methods of vue-router

scoped :: (limited scope  , not use outside)



Axios :: 
  - Axios provides a straightforward API for making HTTP requests with features like promise-based asynchronous requests and built-in response handling
  - It's easy to integrate Axios into Vue.js projects. With its simple syntax and promises-based approach, it's intuitive to use for making API calls.
  - Axios abstracts away the complexities of dealing with XMLHttpRequest and provides a consistent API that works across different browsers.
  - Axios supports all modern browsers, as well as Node.js. It also allows for various customization options, such as interceptors for request and response handling, request cancellation, and more.
  - Axios allows you to intercept requests or responses before they are handled by the .then() or .catch() functions, which can be useful for tasks like adding headers, logging, or transforming data.
  - Axios simplifies error handling by automatically rejecting promises for failed requests, making it easy to handle errors in a consistent manner.
  - Axios has a large community of users and contributors, which means there's plenty of support available online, including documentation, tutorials, and community forums.


Axios send request from vue to node with 2 keys :: method (get/post) and url (path)
Axios takes response from node to vue with 3 keys :: success , message , data


body-parser is a Node.js middleware used for parsing the body of incoming HTTP requests. It's commonly used with frameworks like Express.js to handle POST, PUT, and PATCH requests where the client sends data to the server.
However, since Express 4.16.0, express itself includes express.json() and express.urlencoded() middleware, which parse JSON and URL-encoded request bodies, respectively. These are alternatives to using body-parser, and they are included by default with Express. So, unless you have a specific reason to use body-parser, you might not need to install it separately.


Installing Express via npm is a common step when setting up a Node.js web server. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
