# React Query

## 1. Coin Tracker Project

- This project will demonstrate how you can query data using React Query.

## 1.1 Setup
https://create-react-app.dev/docs/adding-typescript/

- You can start a react project with typescript.
```
npx create-react-app . --template typescript
```

- Install ReactQuery & react-router-dom
```
npm i react-router-dom@5.3.0 react-query
```

## 1.2 Page plan

/ -> All coins
/:id -> /btc -> Coin Detail

/btc/information
/btc/chart

```
npm i --save-dev @types/react-router-dom
```

## Styles

- Reduce all styles to 0 (or reset all styles)
*How can you accomplish reset?*
1. Install a styled reset.
2. Import createGlobalStyle from styled-components

- React has fragments(<></>) that can bundle components together.

- You can set the Global font style.
- You can put all the styles you want inside the GlobalStyle variable.

App.tsx
```js
import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
}
`;

```

20221221-summary
1. index.tsx: 
- Use React.StrictMode
- Use ThemeProvider to get theme of the page from theme.tx
- App is going to be initiated.

2. App.tsx
- Initiate GlobalStyle and Router

3. Router.tsx
- Router users to different pages such as Coin and Coins.

- No underlind: text-docoration to be none on <a>
- Border box default
- Once the theme is set, you can access theme using the prop
```
background-color:${(props) => props.theme.bgColor};
color:${(props) => props.theme.textColor}
```

# 5.2 Home pt.1

20221227 - doing the style
- The screen is going to be recorded. 

# 5.3 Home pt.2

- fetch data from API
- first make interface of data. 
- typescript needs to know what is coming from API
- put the coins on the state.

- useEffect: choose to run code, start, end, or everytime that page renders. 
	- If you surround with async, it will run immediately.

- API gets loaded everytime you refresh the page. 
- If you go into the link to a different page, the user needs to go back and re-fetch everything. This is not efficient. 

# 5.4 Route States 

- Use Crypto Icon to get icons from the website.
- Retrieve Coin data from CoinPaprika.
- We have the information about the coin. We have the name. After the loading, we are going to get the data again and it will show loading. You can send data between the screen behind the scene. 
- Copy paste the styled components.
- Use a hook called useLocation() to get the data including state, pathname etc that has been sent from States.
- useParam hook will get the coinId.
https://reactrouter.com/en/main/hooks/use-params
  - The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

- You can get the name of the coin and post it on the page before you grab details from the website. 
- If you open in the incognito mode, if somebody comes directly to the page, there will be an error. There is no state. The state is created when you click on the one of the options from home. 
- 

# 5.5 Coin Data

- Get data and paint detailed data on the screen. 
- There are URLs that we need to hit to get detailed information. 
- The data needs to be hit from the individual coin page. 
- React Query
- We can get the data and make it into json in one line. 
```js
async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
```
- first console out the data that you fetched and make sure that data is retrieved. 
- Once you confirm that, you can create states that store those data. 
- Usually, auto-complete will check the types in the API.
- The annoying thing about typescript is that you have to explain every little thing.

# 5.6 Data Types

- When you are using Typescript, you have to specify the types.
*How do you get object type?*
1. Console.log data fetched.
2. Right-click and Store object as global variable.
3. Data gets stored in temp1 and temp2.
4. You can explain to Typescript the fast way. 

- Create interfaces
- People always name the interface with "I" in the beginning. 
- Use below javascript code to extract all the keys
```js
Object.keys(temp1)
```
Result:
```js
(24) ['id', 'name', 'symbol', 'rank', 'is_new', 'is_active', 'type', 'logo', 'tags', 'team', 'description', 'message', 'open_source', 'started_at', 'development_status', 'hardware_wallet', 'proof_type', 'org_structure', 'hash_algorithm', 'links', 'links_extended', 'whitepaper', 'first_data_at', 'last_data_at']
```
- Since it is hard to remove comma from the list, you can do below:
```js
Object.keys(temp1).join()
```
Output:
```js
'id,name,symbol,rank,is_new,is_active,type,logo,tags,team,description,message,open_source,started_at,development_status,hardware_wallet,proof_type,org_structure,hash_algorithm,links,links_extended,whitepaper,first_data_at,last_data_at'
```
- select the comma and do CTRL-D to select all commas; then delete and press enter.
- Then, in order to create cursor for all the selected lines, you can do SHIFT-ALT-I 
- Do : ;
- Now, get types by typing below:
```
Object.values(temp1)
```
Output:
```
(24) ['btc-bitcoin', 'Bitcoin', 'BTC', 1, false, true, 'coin', 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png', Array(7), Array(4), 'Bitcoin is a cryptocurrency and worldwide payment …s without a central bank or single administrator.', '', true, '2009-01-03T00:00:00Z', 'Working product', true, 'Proof of Work', 'Decentralized', 'SHA256', {…}, Array(14), {…}, '2010-07-17T00:00:00Z', '2022-12-30T03:50:00Z']
```
- What if you only want to get types only.
```js
Object.values(temp1).map(v => typeof v).join()
```
Output:
```js
'string,string,string,number,boolean,boolean,string,string,object,object,string,string,boolean,string,string,boolean,string,string,string,object,object,object,string,string'
```

- The problem is that some types are objects such as tags and teams.
- If you also want to get type for them, you can do that by explaining to the TypeScript manually or if you don't need it you can delete it. 
- After you are done getting the Interface now you can declare it in the state. 
```js
    const [info, setInfo] = useState<InfoData>({});
```

- You have to do the same for the PriceData
```js
    const [priceInfo, setPriceInfo] = useState<PriceData>();
```

# 5.7 Nested Routes pt.1

- We are going to paint the coin screen.
- Make sure you set Loading to false because it is always going to stay loading.
- If you want to run the code only once, you have to put node dependency with nothing inside. (If you put the variable inside the )
```js
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
```
- If you want to run the code only once, you have to use node dependency, []);
- If you put the variable inside, when the variable changes, it will run again. 
- Whatever you use inside the useEffect hook, you have to put it in the node dependency because when the data changes, useEffect will run again.
- In this case, if we put the coinId, it will only run once because the route or the coinID will not change.
- Nico actually painted the outside with below code. It is worthwhile to look at it. 
- Nested route is route inside the route. 
- It is useful when you have tabs within the pages. 
