<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
#stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
    width: 20vw
}
</style>
</head>    

<div id="stack-container">

<a href="https://make.wordpress.org/"><img src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ" alt="Docker Logo"></a>
</div>

# Docker

## Define a container with Dockerfile

`Dockerfiles` describe how to assemble a private filesystem for a container, and can also contain some metadata describing how to run a container based on this image.

``` dockerfile
# what we want to build the image from here we use node 12 LTS (long term support)
FROM node:12 
# create the working directory from within the image
WORKDIR /usr/src/app
# remember docker images come with npm and node already installed
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# We copy just the package json files to take advantage of cached Docker layer
COPY package*.json ./ 
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source : from source (.) to destination (.)
COPY . . 
# app binds to port 8080 so you'll have it mapped by the docker daemon
EXPOSE 8080
# define the command to run your app using CMD which defines your runtime
# here we use 'node server.js' to start server
CMD ["node", "server.js"]

```



    docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0
## Build and test image

at the end it if build process is successful it should say

    Successfully tagged bulletinboard:1.0

<p class="SpringGreen">
    Run the following command to start a container based on your new image:
</p>
<big class="SpringGreen">docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0</big>


#### There are a couple of common flags here:
- `--publish -p` asks Docker to forward traffic incoming on the host’s <span class="Khaki">port 8000 </span>to the <span class="Bisque">container’s port 8080</span>. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture
- `--detach -d` run this container in the background
- `--name` specifies a name with which you can refer to your container in subsequent commands, in this case `bb`
- `--tag -t` lets you tag to make it easier to find image

You can see application at <u>localhost:8000</u>. You should see your bulletin board application up and running. At this step, you would normally do everything you could to ensure your container works the way you expected; now would be the time to run unit tests, for example.

Once you’re satisfied that your bulletin board container works correctly, you can delete it:

    docker rm --force bb

The `--force` option stops a running container, so it can be removed. If you stop the container running with docker stop `bb` first, then you do not need to use `--force` to remove it.

```bash
# -- PRINT OUTPUT OF APP --

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080
 
# Enter the container
$ docker exec -it <container id> /bin/bash
```
## Extra
``` bash
docker ps 

docker ps -a # to find id of even stopped containers 

docker stop <id>
docker start <id>
```
## Debugging Docker

``` docker 
# docker log
```

## Docker Network 
Allow containers to interact with each other 

TOODO: learn more about `Docker Network`