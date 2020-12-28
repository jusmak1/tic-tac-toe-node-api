# tic-tac-nodejsact

### 1. `npm i`
### 2. `npm start`

To run tests 
### `npm run test`

## Endpoints

#### GET '/game:gameId'
gameId must be valid GUID, returns board array and gameId 

#### POST '/game'
body must look like this 
{ 
  "board": [],
  "gameId: '00000000-0000-0000-0000-000000000000'
}
###### Don't forget to change DB_URL in config file

## Docker

#### docker build -t tic-tac-nodejsact .

#### docker run -d -p 3000:3000 tic-tac-nodejsact
