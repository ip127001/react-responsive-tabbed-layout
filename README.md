## Start the application using following commands

```
npm install
npm start
```

## Flow of the application

1. On home page there is option to choose one of the two tabs.
2. If clicked on 'Lists' tab:- 
    ```
    There is view of all the objects fetched from the given API.
    Every view is in form of card structure.
    Each view has Image in form of round thumbnail structure.
    Cards with intership has different color than cards with offer.
    If we click on favourite button and submit it, then that card is added to the favourite tab.
    Also we see favourite button is checked for those are selected to be in Lists tab.
    ```
3. If clicked on 'Favourite' tab:-
    ```
    There is view of all the cards which are selected as favourite in Lists tab.
    There is no repeatition of cards if selected more than one time in Lists tab.
    ```