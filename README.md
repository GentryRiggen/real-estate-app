# Project Composition

- I decided to use TypeScript for this project because I really enjoy writing in
  it and believe it helps catch errors faster
- I also added craco to the project so I could have some more configuration
  control over react-scripts. This allowed me to:
  - Configure the webpack config to allow for relative/named paths
  - Add Tailwind css (To me it's just a modern bootstrap - less opionated and
    gives me the confidence of multi-browser compliant css)
- I added lint-staged with husky to add a pre-commit git hook that will run the
  following on any changes within the commit
  - prettier
  - eslint
  - jest tests
- Basic jest tests for vanilla js utils
- React Testing Library (which is already installed with create react app) for testing components
- I am also using Github actions to install and cache node_modules, run all
  tests, and (if tests pass) deploy the site to a free Firebase host https://side.gentry.codes
- I really like to use Ramda (even though there wasn't a ton of need for it in
  this small of an app)

# Code Architecture

- I must say it was really difficult to constrain myself and not over-engineer 😅
- I wanted to add some level of global state management like redux. Why?
  - With a long list, I wanted to store each property as an entity (using
    normalizr) and then maintain just a list of property ids so that fetching more
    or favoriting a property wouldn't cause each item in the list to be re-rendered
  - I definitely started to roll my own global state via a context then stopped myself
  - Also when navigating to a property details page, the entity could be retrieved
    from the store instead of waiting on the fetch by id API call
- So instead of redux I maintained a separate list of favorited property ids
  and wrapped that in a React Context which persists to local storage.
- Similary the API code persists to local storage and will skip the http request
  if it finds that request has already been made
- I created a generic GridList component that will render a custom component for
  each list item and also paginate via infinite scrolling for as long as there
  are more API list items. The pagination logic for lists could be further extracted
  if the app later added other types list (instead of grids etc).

# Other

- Given more time I would add some of the following:
  - Redux like I mentioned before
  - End to End tests (I enjoy using Cypress)
  - Next.js or any other PWA library. Running this app through Lighthouse shows
    that "Largest Contentful Paint" can be slow (like any SPA app) and server
    side rendering would help
