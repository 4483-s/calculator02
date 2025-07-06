**these are dev packages, add `--save-dev` option**  
webpack  
webpack-cli  
html-webpack-plugin  
style-loader  
css-loader  
html-loader  
webpack-dev-server  

---  
npm install webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server --save-dev

---  
**scripts in package.json**  
```
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
}
```
