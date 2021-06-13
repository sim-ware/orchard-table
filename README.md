# orchard-table
A table for comparing apple trees to apple trees:
* Create a Web User Interface to display the orchards returned from this API https://bx.group/.test/orchards.json.
* The UI should support sorting and filtering of the results.

This app was created using `npx create-react-app` to get a simple React app off the ground. I then installed `react-table` - an npm package widely supported and recommended, to simplify the handling of table structure. `react-table` also comes with support for `sort` and `filter`ing, so it was a case of following their documentation to implement `sort`. For `filter`ing, their use case was slightly more complex, so I resorted to a simpler search bar `filter` for the field of `name`.

## To Run
```
$ cd orchard-table
$ npm start
```

Then navigate to 'http://localhost:3000/' in your browser of choice.