Example repo to reproduce imports bug with nathanreid:css-modules package

# Errors

1. This is a very weird bug:

This doesn't throw an error:
```
.foo {
  composes: importedClass from './toimport.scss';
  background-color: #000;
}

```

This doesn't throw an error:
```
// Comment
.foo {
  background-color: #000;
}

```

This throws an error:
```
// something
.foo {
  composes: importedClass from './toimport.scss';
  background-color: #000;
}

```

 The error is:
 ```
 /Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss-modules-scope/lib/index.js:22:13:
   composition is only allowed when selector is single :local class name not in "//

   :local(.foo)"
```


Also, continuing with error 1, this works:
```
@import './toimport.scss';
```

This fails:
```
// adaw
@import './toimport.scss';
```

With error:
```
/Users/rafaelvidaurre/Code/pathable/css-modules-repro/packages/css-modules-repro-styles/imports/test.scss:1:1: Unknown word
```

# Other things
I noted that when I use `@import ./imports/toimport.scss` I get this message on the browser:

```
css.js:20Resource interpreted as Stylesheet but transferred with MIME type text/html: "http://localhost:3000/toimport.scss".
```
