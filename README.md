# microservice361

This is a microservice that uses HTTP request/response as a communication pipe in order to send a baking meme from the server to the client.  Here is a UML diagram to summarize how it works: 

![image](https://user-images.githubusercontent.com/96030208/198849049-6f9fbcba-eee4-43f5-9adf-3168a8d0bcbb.png)

The server is found in the file called "server.js."  It is intended to run locally on Port8000.  First, it randomly selection between 5 files (feel free to use your own baking meme files) and reads said file (in this case, the file is a jpeg image that is a baking meme).  Then the file is hosted on the server at Port8000. 

The client in this case is a HTTP request in "client.js".  It sends a GET HTTP request to Port8000.  When it receives a response, it saves the data in the response to a file called "img.jpg."  In this example, the file is saved in the same folder, and it can then be accessed by a web app to be post the picture to the web app.  

An example of the client request and response handling can be found in teh "client.js" file but is essentially looks like this: 
![image](https://user-images.githubusercontent.com/96030208/198846834-4cdd9fad-aa80-4abc-9008-310cfb0b55e9.png)

Once the server is running, the GET request will contact the server at Port8000.  The response comes from the server hosted at Port8000.  The client will receive the image as a response.  It will then save the image - in this example, the image is saved in the same folder- and the image is available to use in a web app.    

Here is a video walkthrough that demonstrates how the microservice works: 

https://media.oregonstate.edu/media/t/1_sfuogdrj
