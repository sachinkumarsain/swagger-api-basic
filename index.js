// Importing necessary modules
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import books from "./dataBase.js";

const app = express();
app.use(express.json());

let cars = [
    { id: "1", model: "tata" },
    { id: "2", model: "kia" },
    { id:" 3", model: "mahindra" }
]



//............. Swagger options.....................//

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js API Project",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080/"
            }
        ]
    },
    apis: [
        "./index.js"
    ]
};

//....................creating sweeger..........................//

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//.......................create schema ............................//

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         _id:
 *           type: object
 *           properties:
 *             $oid:
 *               type: string
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         image:
 *           type: string
 *         description:
 *           type: string
 *         bookType:
 *           type: string
 *         country:
 *           type: string
 */


//....................................get method advance....................//
// /**
//  * @swagger
//  * /data:
//  *   get:
//  *     summary: Get book information
//  *     description: This API returns book information.
//  *     responses:
//  *       200:
//  *         description: Successful response with book data.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Book'
//  */


//.......................simple get method.............................//

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get book information
 *     description: This API returns book information.
 *     responses:
 *       200:  
 *         description: Successful response with book data.
 *         content:
 *           application/json:
 *            schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                          id:
 *                            type: string
 *                          model:
 *                            type: string

 
 *                 
 */



//..................................get data............................//

app.get("/data", (req, res) => {
    res.status(200).json(cars);
    // console.log("hello")
});



// /**
//  * @swagger
//  * /users:
//  *   post:
//  *     summary: Create a new user
//  *     description: This API creates a new user.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Book'
//  *     responses:
//  *       201:
//  *         description: Successful creation of a new user.
//  */


//..............................post method................//

app.post("/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);
    res.status(201).json(users);
});

//...................... Starting  server..........................//

app.listen(8080, () => {
    console.log("Server started at port 8080");
});
