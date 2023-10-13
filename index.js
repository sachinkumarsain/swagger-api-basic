// import cors from "cors"
import express from "express"
import books from "./dataBase.js";
const app = express();
app.use(express.json());

// let car = [
//     { id: 1, model: "kia" },
//     { id: 2, model: "tata" },
//     { id: 3, model: "mahindra" }
//     {id :4 , }
// ]

//..............swagger import tools .................//
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

//...............definitions using swagger ...........//
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
}

//....................swagger connect..................//

const swaggerSpec = swaggerJSDoc(options)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//................... api get simple method (cars)..........//
// /**
//  * @swagger
//  * /data:
//  *   get:
//  *     summary: Get car information
//  *     description: This API returns car information.
//  *     responses:
//  *       200:
//  *         description: Successful response with car data.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: integer
//  *                   model:
//  *                     type: string
//  */

//................api get method documentation ................//
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
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: object
 *                     properties:
 *                       $oid:
 *                         type: string
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   image:
 *                     type: string
 *                   description:
 *                     type: string
 *                   bookType:
 *                     type: string
 *                   country:
 *                     type: string
 *                
 *                   
 */


//................get method .......................//

app.get("/data", (req, res) => {
    res.status(200).send(books)
    console.log("hello")
})

//................api post method documentation.............//

//......................post method...........................//

app.listen(8080, () => {
    console.log("server started at port 8080");
});
