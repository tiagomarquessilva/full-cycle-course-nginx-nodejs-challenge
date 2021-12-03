# Full Cycle Course - Docker - Nginx w/ Node.js Challenge

## Introduction
This is my resolution to a practice challenge of the [Full Cycle course by code.education](https://fullcycle.com.br/). This course aims to teach developers to become a [Full Cycle Developer](https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249), a concept introduced by Netflix.

## Details

|Module |Challenge          |Link                                                                                                       |
|---    |---                |---                                                                                                        |
|Docker |Nginx w/ Node.js   |[code.education Portal](https://portal.code.education/lms/#/183/163/110/conteudos?projeto=51&fase=249)    |

<table>
    <tr>
        <th colspan="2">Challenge Requirements</th>
    </tr>
    <tr>
        <th>Ref.</th>
        <th>Requirement</th>
    </tr>
    <tr>
        <td>R01</td>
        <td>Create a Nginx configuration that redirects the traffic to a Node.js API</td>
    </tr>
    <tr>
        <td>R02</td>
        <td>The Node.js API adds a name and the creation time to a "people" table in a MySQL database</td>
    </tr>
    <tr>
        <td>R03</td>
        <td>If you pass a query parameter to the API then you can change the name that is added</td>
    </tr>
    <tr>
        <td>R04</td>
        <td>The API should respond with a HTML that contains a "Full Cycle Rocks!" header and all the rows of the "people" table</td>
    </tr>
    <tr>
        <td>R06</td>
        <td>The Nginx entrypoint should be http://localhost:8080/</td>
    </tr>
    <tr>
        <td>R05</td>
        <td>The requirements should be implemented using docker-compose</td>
    </tr>
</table>

## Installation

### Using Docker Hub

1. You can check the image in [Docker Hub](https://hub.docker.com/r/tiagomarquessilva/codeeducation). After a while Docker Hub removes unused images, so it may not be currently available
1. ```docker
   docker run --rm tiagomarquessilva/codeeducation
   ```
1. To check the image size:
   ```docker
   docker image ls tiagomarquessilva/codeeducation
   ```

### Building From Source
1. ```docker
   docker build -t tiagomarquessilva/codeeducation .
   ```
1. ```docker
   docker run --rm tiagomarquessilva/codeeducation
   ```
1. To check the image size:
   ```docker
   docker image ls tiagomarquessilva/codeeducation
   ```
