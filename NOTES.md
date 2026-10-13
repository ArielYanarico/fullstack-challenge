# Notes

Fill this in as you go — it carries as much weight in review as the code.
Keep it short; bullets are fine.

## What I completed

### Required

1. [x] Fetch and display the car list from the mock GraphQL API (GetCars).
2. [x] Serve a different image per breakpoint: mobile ≤639px, tablet 640–1023px, desktop ≥1024px.
3. [x] Present the list using Material UI, with loading, error and empty states handled.
4. [x] Add a form that creates a new car through the CreateCar mutation and updates the list.
5. [x] Add a search field that filters by model, and a sort control.
6. [x] Move the data-fetching logic into a custom hook, useCars().
7. [x] Write unit tests for the components and hooks you add.

### Nice to have

* [x] Filter server-side by passing variables to GetCars rather than filtering in the client.
* [x] Add a year filter and combine all filters into a useCarFilters() hook.
* [x] Debounce the search input.
* [ ] Add a detail route using the GetCar query.

## What I left out, and why

<!-- Scope you consciously cut. Naming a trade-off reads better than silence. -->
* I missed a 'nice to have' point "Add a detail route using the GetCar query." because I ran out of time.

## Decisions and trade-offs

* Images are served per breakpoint, However they are not served reactively when browser size is updated.
  * Why? In my mind it is more performant, because the request to API is not getting all images and rendering them according the windows size, instead I am doing the API call only with the image required for my windows size so I am requesting for less resources and getting a faster result.

<!-- Structure, state management, where filtering happens, what you tested and
     what you didn't, any library you added and why. -->

## If I had another day

* Improve Design and Responsiveness
* Add a detail route using the GetCar query
* Improve unit test coverage
<!-- What you would do next, in priority order. -->

## Anything you should know to run it

<!-- Deviations from `npm install && npm run dev`, if any. -->

## Bibliography (references)

* [Apollo - Data Queries](https://www.apollographql.com/docs/react/data/queries)
* [MUI - Grid](https://mui.com/material-ui/react-grid/#customization)
* [MUI - Button](https://mui.com/material-ui/react-button/)
* [MUI - Stack](https://mui.com/material-ui/react-stack/#customization)
* [MUI - Text Field](https://mui.com/material-ui/react-text-field/)
* [MUI - Dialogs](https://mui.com/material-ui/react-dialog/#form-dialogs)

