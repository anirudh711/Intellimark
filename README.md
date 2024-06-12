# Architecture
![alt text](https://github.com/anirudh711/Intellimark/blob/main/architecture.png)

# Overview of the Project

The project uses the following to achieve the task as an AI-powered bookmark manager with:

- Parser (web links, documents)
- BERT topic model
- FAISS vector database to store BERT embeddings
- MongoDB to store documents, users
- Flask server for inference endpoints and CRUD operations
- Docker for containerizing
- Extension
- Frontend

## Components

### Parser

The user will be able to use the extension to either mark the site as a favorite or bulk upload all their bookmarks to the system. The parser comes into play to derive meaningful data from the web link to further use it for topic modeling. The parser is vital for accurate topic modeling.

### BERT

This is a topic model called BERT trained on the Wikipedia dataset. The bookmarks of the user, after running through the parser, are passed into the model to create embeddings and to predict the approximate topics of the content from the user’s bookmark.

### FAISS and MongoDB

The embeddings from the previous step will be stored in the vector database and the original document parsed from the user will be stored in MongoDB tagged under the user’s ID.
MongoDB will also store the user-related data for them to maintain sessions.
FAISS database is specifically used for this purpose since we can run algorithms for similarity that are built in FAISS. In our case, we are using cosine similarity, which is used to rank and output documents when a query string is entered on the frontend to search the user’s bookmarks.

### Flask Server

- It contains the parsing mechanism.
- Flask server exposes the BERT topic model as an inference endpoint to create embeddings and make predictions.
- It also maintains sessions, and stores and manages users and documents.

### Extension

The role of the extension is to control the active tabs of the user. As you click on different tabs and find something you want to bookmark, you can click on the extension and bookmark it. The extension will take into account the current active tab (the tab you want to bookmark) and do the process. The process will be to upload the bookmark to the server, parse it, do topic modeling, and store it in FAISS for querying and MongoDB for truth checks.

**Note:** The extension also allows you to bulk upload all your current bookmarks (supported mainly on Chromium browsers).

### Frontend

This is the gateway to querying all the saved bookmarks. Users will be able to log in and see a list of bookmarks saved. The user will also be able to query the said bookmarks with natural language, and clicking on each bookmark will take you to the respective site.
