# Notes

Fill this in as you go — it carries as much weight in review as the code.
Keep it short; bullets are fine.

## What I completed

### Required

1. [x] Fetch and display the car list from the mock GraphQL API (GetCars).
2. [x] Serve a different image per breakpoint: mobile ≤639px, tablet 640–1023px, desktop ≥1024px.
3. [x] Present the list using Material UI, with loading, error and empty states handled.
4. [x] Add a form that creates a new car through the CreateCar mutation and updates the list.
5. [ ] Add a search field that filters by model, and a sort control.
6. [x] Move the data-fetching logic into a custom hook, useCars().
7. [ ] Write unit tests for the components and hooks you add.

### Nice to have

* [ ] Filter server-side by passing variables to GetCars rather than filtering in the client.
* [ ] Add a year filter and combine all filters into a useCarFilters() hook.
* [ ] Debounce the search input.
* [ ] Add a detail route using the GetCar query.

## What I left out, and why

<!-- Scope you consciously cut. Naming a trade-off reads better than silence. -->

* Images are served per breakpoint, However they are not served reactively when browser size is updated.
  * Why? In my mind it is more performant, because the request to API is not getting all images and rendering them according the windows size, instead I am doing the API call only with the image required for my windows size so I am requesting for less resources and getting a faster result.

## Decisions and trade-offs

<!-- Structure, state management, where filtering happens, what you tested and
     what you didn't, any library you added and why. -->

## If I had another day

<!-- What you would do next, in priority order. -->

## Anything you should know to run it

<!-- Deviations from `npm install && npm run dev`, if any. -->
