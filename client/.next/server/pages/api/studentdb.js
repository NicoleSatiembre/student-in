"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/studentdb";
exports.ids = ["pages/api/studentdb"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = \"mongodb+srv://admin:admin@nicolecluster.votszzm.mongodb.net/\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sK0NBQStDO0FBQ2pFLENBQUM7QUFFRCxNQUFNQyxNQUFPO0FBQ2IsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwyQ0FBMkM7QUFDN0QsQ0FBQztBQUVELElBQUlILElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0MsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1pbi8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9ICBcIm1vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5Abmljb2xlY2x1c3Rlci52b3RzenptLm1vbmdvZGIubmV0L1wiO1xyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlOyBcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/studentdb.js":
/*!********************************!*\
  !*** ./pages/api/studentdb.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"StudentsDb\");\n        const collectionName = req.query.collection;\n        switch(req.method){\n            case \"GET\":\n                {\n                    const studentCPE = await db.collection(collectionName).find({}).sort({\n                        metacritic: -1\n                    }).limit(10).toArray();\n                    res.status(200).json(studentCPE);\n                }\n                break;\n            case \"POST\":\n                {\n                    const { name , number  } = req.body; //the object that we will pus is {name: \"SNdjnfjn\", number: \"34534\"}\n                    const nameExist = await db.collection(collectionName).findOne({\n                        name\n                    });\n                    const numExist = await db.collection(collectionName).findOne({\n                        number\n                    });\n                    if (nameExist) {\n                        // Data exists in the collection\n                        console.log(\"Data exists:\");\n                        res.json({\n                            message: \"Error. Student name exists\"\n                        });\n                    } else if (numExist) {\n                        // Data exists in the collection\n                        console.log(\"Data exists:\");\n                        res.json({\n                            message: \"Error. Student number exists\"\n                        });\n                    } else if (numExist && nameExist) {\n                        // Data exists in the collection\n                        console.log(\"Data exists:\");\n                        res.json({\n                            message: \"Error. Student name and number exists\"\n                        });\n                    } else {\n                        // Data does not exist in the collection\n                        const studentCPE = await db.collection(collectionName).insertOne({\n                            name,\n                            number\n                        });\n                        res.status(200).json({\n                            data: studentCPE,\n                            message: \"Successfully added new student.\"\n                        });\n                    }\n                }\n                break;\n            case \"DELETE\":\n                {\n                    const deleteAll = req.query.deleteAll;\n                    if (deleteAll) {\n                        const result = await db.collection(collectionName).deleteMany({});\n                        if (result.deletedCount >= 1) {\n                            res.status(200).json({\n                                message: \"Successfully deleted all document. \" + deleteAll\n                            });\n                        } else {\n                            console.log(\"No documents matched the query. Deleted 0 documents.\");\n                        }\n                    } else if (!deleteAll) {\n                        const studentId = req.body.idNumber; // Access idNumber from the request body\n                        const query = {\n                            id: studentId\n                        }; //in the database we have: {_id, id, name, number}.. we will query the \"id\"\n                        const result = await db.collection(collectionName).deleteOne(query);\n                        if (result.deletedCount === 1) {\n                            res.status(200).json({\n                                message: \"Successfully deleted one document. \" + deleteAll\n                            });\n                        } else {\n                            console.log(\"No documents matched the query. Deleted 0 documents.\");\n                        }\n                    } else {\n                        res.json({\n                            message: \"Confused: \" + deleteAll\n                        });\n                    }\n                }\n                break;\n        }\n    } catch (e) {\n        console.error(e);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87NEJBQ0xMLFFBQVFDLEdBQUcsQ0FBQzt3QkFDZCxDQUFDO29CQUVILE9BQ0k7d0JBQ0Z0QixJQUFJYyxJQUFJLENBQUM7NEJBQUNTLFNBQVMsZUFBZUc7d0JBQVM7b0JBQzdDLENBQUM7Z0JBRUg7Z0JBQUUsS0FBTTtRQUVWO0lBQ0YsRUFDQSxPQUFPUSxHQUFHO1FBQ1JiLFFBQVFjLEtBQUssQ0FBQ0Q7SUFDaEI7QUFFRixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1pbi8uL3BhZ2VzL2FwaS9zdHVkZW50ZGIuanM/OTIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJTdHVkZW50c0RiXCIpO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSByZXEucXVlcnkuY29sbGVjdGlvbjsgXHJcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XHJcbiAgICAgIGNhc2UgXCJHRVRcIjoge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRDUEUgPSBhd2FpdCBkYlxyXG4gICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpXHJcbiAgICAgICAgICAuZmluZCh7fSlcclxuICAgICAgICAgIC5zb3J0KHsgbWV0YWNyaXRpYzogLTEgfSlcclxuICAgICAgICAgIC5saW1pdCgxMClcclxuICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdHVkZW50Q1BFKTtcclxuICAgICAgfSBicmVhaztcclxuICAgICAgY2FzZSBcIlBPU1RcIjoge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbnVtYmVyIH0gPSByZXEuYm9keTsgLy90aGUgb2JqZWN0IHRoYXQgd2Ugd2lsbCBwdXMgaXMge25hbWU6IFwiU05kam5mam5cIiwgbnVtYmVyOiBcIjM0NTM0XCJ9XHJcbiAgICAgICAgY29uc3QgbmFtZUV4aXN0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuZmluZE9uZSh7IG5hbWV9KTtcclxuICAgICAgICBjb25zdCBudW1FeGlzdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpLmZpbmRPbmUoe251bWJlcn0pO1xyXG4gICAgICAgIGlmIChuYW1lRXhpc3QpIHtcclxuICAgICAgICAgIC8vIERhdGEgZXhpc3RzIGluIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBleGlzdHM6Jyk7XHJcbiAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdFcnJvci4gU3R1ZGVudCBuYW1lIGV4aXN0cycgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmKG51bUV4aXN0KXtcclxuICAgICAgICAgICAgLy8gRGF0YSBleGlzdHMgaW4gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgZXhpc3RzOicpO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdFcnJvci4gU3R1ZGVudCBudW1iZXIgZXhpc3RzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihudW1FeGlzdCAmJiBuYW1lRXhpc3Qpe1xyXG4gICAgICAgICAgLy8gRGF0YSBleGlzdHMgaW4gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGV4aXN0czonKTtcclxuICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ0Vycm9yLiBTdHVkZW50IG5hbWUgYW5kIG51bWJlciBleGlzdHMnIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvLyBEYXRhIGRvZXMgbm90IGV4aXN0IGluIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgICBjb25zdCBzdHVkZW50Q1BFID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuaW5zZXJ0T25lKHtuYW1lLCBudW1iZXJ9KTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogc3R1ZGVudENQRSwgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBhZGRlZCBuZXcgc3R1ZGVudC4nIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgICBjYXNlICdERUxFVEUnOiB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQWxsID0gcmVxLnF1ZXJ5LmRlbGV0ZUFsbFxyXG4gICAgICAgIGlmKGRlbGV0ZUFsbCl7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKS5kZWxldGVNYW55KHt9KTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGVsZXRlZENvdW50ID49IDEpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6IFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgYWxsIGRvY3VtZW50LiBcIiArIGRlbGV0ZUFsbH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBkb2N1bWVudHMgbWF0Y2hlZCB0aGUgcXVlcnkuIERlbGV0ZWQgMCBkb2N1bWVudHMuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFkZWxldGVBbGwpe1xyXG4gICAgICAgICAgY29uc3Qgc3R1ZGVudElkID0gcmVxLmJvZHkuaWROdW1iZXI7IC8vIEFjY2VzcyBpZE51bWJlciBmcm9tIHRoZSByZXF1ZXN0IGJvZHlcclxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0geyBpZDogc3R1ZGVudElkIH07IC8vaW4gdGhlIGRhdGFiYXNlIHdlIGhhdmU6IHtfaWQsIGlkLCBuYW1lLCBudW1iZXJ9Li4gd2Ugd2lsbCBxdWVyeSB0aGUgXCJpZFwiXHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKS5kZWxldGVPbmUocXVlcnkpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5kZWxldGVkQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6IFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgb25lIGRvY3VtZW50LiBcIiArIGRlbGV0ZUFsbH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBkb2N1bWVudHMgbWF0Y2hlZCB0aGUgcXVlcnkuIERlbGV0ZWQgMCBkb2N1bWVudHMuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHJlcy5qc29uKHttZXNzYWdlOiAnQ29uZnVzZWQ6ICcgKyBkZWxldGVBbGx9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJjb2xsZWN0aW9uTmFtZSIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsIm1ldGhvZCIsInN0dWRlbnRDUEUiLCJmaW5kIiwic29ydCIsIm1ldGFjcml0aWMiLCJsaW1pdCIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsIm51bWJlciIsImJvZHkiLCJuYW1lRXhpc3QiLCJmaW5kT25lIiwibnVtRXhpc3QiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImluc2VydE9uZSIsImRhdGEiLCJkZWxldGVBbGwiLCJyZXN1bHQiLCJkZWxldGVNYW55IiwiZGVsZXRlZENvdW50Iiwic3R1ZGVudElkIiwiaWROdW1iZXIiLCJpZCIsImRlbGV0ZU9uZSIsImUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/studentdb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/studentdb.js"));
module.exports = __webpack_exports__;

})();