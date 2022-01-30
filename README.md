Demo of dockerizing simple react todo app

To run locally :
<h3>prerequisite</h3>
Docker installed <br/><br/>

1. Go to the server directory
2. Run ``docker-compose up`` to run redis and NodeJS containers using docker compose
3. Return to the main directory and create react image using the Dockerfile : Run ``docker build -t frontend-todo-app:1.0 .``
4. After the image is created run ``docker run -p 3000:3000 front-todo-app:1.0``

  
  
  
