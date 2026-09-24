# Learn React by building a task manager

Start with a blank page and grow it into an app you can use every day. Each task builds on the previous ones. These exercises build a strong foundation; becoming advanced takes repeated practice and building different projects.

For each task: build it, verify the **Done when** checks, then explain how it works in your own words before ticking the box. Don't copy a complete solution before trying.

## 1. Your first components

- [ ] **Task 1 — Put something on the page.** In `src/App.js`, add an `h1` containing “My Task Manager” and a paragraph describing what you'll use it for inside the existing `<main>`.
  **Practice:** JSX and returning markup.
  **Done when:** both appear after saving and refreshing, with no console errors.

- [ ] **Task 2 — Use JavaScript in JSX.** Create variables for your name and learning goal. Display them using `{}`. Create an object describing one task and display its title.
  **Practice:** variables, objects, JSX expressions.
  **Done when:** changing the variables changes the displayed text without editing the markup.

- [ ] **Task 3 — Reuse a component.** Create a `TaskCard` function component that accepts `title` and `description` as props. Render three different cards from `App`.
  **Practice:** components and props. Keep components in `src/App.js` for now.
  **Done when:** three cards use the same component and display different content.

- [ ] **Task 4 — Render an array.** Replace the three manual cards with an array of task objects and `.map()`. Give each object a stable `id` and use it as the React `key`.
  **Practice:** arrays, `.map()`, keys.
  **Done when:** adding one object creates another card, and the console has no key warning.

## 2. Make the app interactive

- [ ] **Task 5 — Build a tiny practice counter.** Add a counter with “+”, “−”, and “Reset” buttons using `React.useState`. Prevent negative values. Remove the counter once you understand it.
  **Practice:** state, click handlers, functional state updates.
  **Done when:** clicks update the number immediately and Reset returns it to zero. Explain why changing a plain variable wouldn't do the same thing.

- [ ] **Task 6 — Add a task through a form.** Move your task array into state. Add a labeled title input and a submit button. Keep the input value in state; use form submission so Enter works too. Reject whitespace-only titles and clear the input after success.
  **Practice:** controlled inputs, `onSubmit`, `preventDefault`, immutable array updates.
  **Done when:** adding a task doesn't reload the page, new tasks have unique stable IDs, and blank tasks cannot be added.

- [ ] **Task 7 — Complete and delete tasks.** Give each task a checkbox and a Delete button. Use `.map()` to toggle completion and `.filter()` to delete by ID. Pass callbacks from `App` to `TaskCard`.
  **Practice:** lifting state up, callbacks, immutable updates.
  **Done when:** completing or deleting one task affects only that task, including when two tasks have identical titles.

- [ ] **Task 8 — Show progress and empty states.** Display total, active, and completed counts. Show “No tasks yet” when the list is empty. Calculate counts from task state instead of storing separate counts.
  **Practice:** derived values and conditional rendering.
  **Done when:** counts stay correct after adding, completing, and deleting tasks, including the last task.

## 3. Build useful everyday features

- [ ] **Task 9 — Filter and search.** Add All, Active, and Completed filter buttons plus a labeled search input. Match titles without case sensitivity. Show a helpful message when nothing matches.
  **Practice:** combining state with derived lists.
  **Done when:** searching within Completed only shows matching completed tasks; clearing search and choosing All restores every task.

- [ ] **Task 10 — Edit a task.** Add Edit, Save, and Cancel controls. Start editing with the current title and reject blank edits. Keep draft text separate until Save.
  **Practice:** local editing state and validation.
  **Done when:** Save changes the title, Cancel preserves the original, and the task keeps its ID and completion status.

- [ ] **Task 11 — Add priority and sorting.** Add a labeled priority selector to the creation form. Let users sort by priority or creation time. Sort a copy of the array instead of mutating state.
  **Practice:** object updates, comparisons, non-mutating sorting.
  **Done when:** changing sort order preserves all task data and works together with filters and search.

- [ ] **Task 12 — Keep tasks after refresh.** Load tasks from `localStorage` when state initializes and save changes with `React.useEffect`. Handle missing data, malformed JSON, and storage failures without crashing.
  **Practice:** effects, JSON, lazy state initialization, error handling.
  **Done when:** tasks survive refresh; invalid saved data produces a usable page; filters still work on restored tasks.

- [ ] **Task 13 — Make it comfortable to use.** Create `src/styles.css` and link it from `index.html`. Add spacing, readable text, visible keyboard focus, and a mobile layout. Use real buttons and labels. Don't communicate completion or priority through color alone.
  **Practice:** CSS, semantic HTML, accessibility.
  **Done when:** you can add, edit, complete, and delete using only the keyboard, and the app has no horizontal scrolling at a 320px viewport width.

## 4. Work with a larger React project

- [ ] **Task 14 — Move to a build tool.** Move the app into a Vite React setup. Replace CDN scripts and browser Babel with package dependencies and module imports. Split `TaskForm`, `TaskList`, `TaskCard`, and `TaskFilters` into separate files.
  **Practice:** npm, imports/exports, development servers, production builds.
  **Done when:** the development server works, the production build succeeds, and all earlier features still work. Ask for setup help here if needed.

- [ ] **Task 15 — Load example tasks from an API.** Add an explicit “Load examples” button that fetches tasks from a practice API. Show loading, failure with Retry, and empty-result states. Prevent duplicate imports and preserve existing tasks. Handle responses that arrive after the component unmounts.
  **Practice:** `fetch`, `async`/`await`, HTTP error checks, request lifecycle.
  **Done when:** success imports tasks, a failed request shows Retry, and repeated clicks don't duplicate tasks. Test with network throttling and offline mode in browser dev tools.

- [ ] **Task 16 — Extract shared logic.** Move persistence into a `useLocalStorage` custom hook. When task actions become cumbersome, move them into a reducer with named add, edit, toggle, and delete actions.
  **Practice:** custom hooks, `useReducer`, separating responsibilities.
  **Done when:** the app behaves exactly as before, and you can explain what the hook handles versus what the reducer handles.

- [ ] **Task 17 — Add separate pages.** Use a router to create Tasks, Stats, and About pages. Include navigation and a not-found page. Keep task data consistent across navigation.
  **Practice:** routing, shared state, URL-driven navigation.
  **Done when:** browser Back/Forward works, navigating doesn't lose tasks, and a task detail URL handles an unknown task ID gracefully.

## 5. Build confidence before sharing

- [ ] **Task 18 — Test real user actions.** Add Vitest and React Testing Library. Test adding via Enter, rejecting a blank title, toggling completion, deleting one of two identically named tasks, combining search with filters, and canceling an edit. Mock the API to test loading and error states.
  **Practice:** behavior-focused tests and accessible queries.
  **Done when:** tests pass, and deliberately breaking each tested behavior makes its test fail.

- [ ] **Task 19 — Add types.** Convert the app to TypeScript. Define a Task type, a priority union, component props, and reducer actions. Validate external API and storage data at runtime.
  **Practice:** types at component boundaries and runtime validation.
  **Done when:** type checking passes without using `any` to bypass errors, and malformed external data doesn't crash the app.

- [ ] **Task 20 — Investigate performance.** Generate 1,000 practice tasks and profile typing, filtering, and toggling using React DevTools. Identify a measured bottleneck before adding memoization or list virtualization.
  **Practice:** profiling and evidence-based optimization.
  **Done when:** you've recorded before/after measurements for an improvement, or documented why no optimization was necessary.

- [ ] **Task 21 — Ship it.** Build and deploy the app to a static host. Document setup, features, known limitations, and test commands in README. Configure route fallback if your router requires it.
  **Practice:** production builds, deployment, documentation.
  **Done when:** someone else can open the deployed app, refresh a nested route, and complete the main task flow. Clearly explain that localStorage data is specific to that browser and isn't account sync.

## 6. Prove you can build independently

- [ ] **Task 22 — Build a second app from a blank project.** Choose an expense tracker, recipe organizer, or habit tracker. Write five user stories and acceptance checks before coding. Include forms, validation, filters, persistence, API loading, responsive styling, and tests.
  **Done when:** another person tries it, you fix three issues from their feedback, and you can explain your state and component choices without referring to a tutorial.

## When you get stuck

1. Describe what you expected and what actually happened.
2. Read the first console error and find the relevant line.
3. Reduce the problem to one component or interaction.
4. Ask: “I'm on Task X. Here's my code and error. Give me a hint first.”

Start now with **Task 1**. You only need to edit `src/App.js`.
