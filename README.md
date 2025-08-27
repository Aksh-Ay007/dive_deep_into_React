# React Rev

This project demonstrates how to use React's `createElement` API to build nested elements and render them to the DOM using `ReactDOM.createRoot`.

## How It Works

- The main logic is in [app.js](app.js), where React elements are created manually using `React.createElement`.
- Nested elements are represented as arrays of children, allowing for complex component structures.
- The root element is rendered into the `<div id="root">` in [index.html](index.html) using `root.render(parent)`.

## Custom React Setup

Unlike projects created with the official `create-react-app` command, this setup is fully manual. You configured everything yourself:

- Created your own HTML, CSS, and JS files.
- Installed React and ReactDOM as dependencies.
- Used Parcel as the bundler for fast development and optimized builds.
- Built React elements manually and rendered them using React 18's root API.

This approach gives you more control and a deeper understanding of how React works under the hood.

## File Structure

- **index.html**: Sets up the HTML structure and loads React, ReactDOM, and the main script.
- **app.js**: Contains the React element creation and rendering logic.
- **index.css**: Provides basic styling for the parent and child elements.
- **README.md**: Project documentation.

## Example

The following code from [app.js](app.js) creates a parent `<div>` with two child `<div>`s, each containing two `<h1>` elements:

```js
let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam first child"),
    React.createElement("h1", {}, "iam second child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam first child"),
    React.createElement("h1", {}, "iam second child"),
  ]),
]);
```

## Parcel Features

- **Dev build**
- **Local server creation**
- **HMR (Hot Module Replacement)** – algorithm written in C++
- **Caching** – faster builds
- **Image optimization**
- **Minification**
- **Bundling**
- **Compression**
- **Consistent hashing**
- **Code splitting**
- **Differential bundling** – supports older browsers
- **Tree shaking** – removes unused code

## Why Is This App So Fast?

This React project is fast because it leverages the latest React rendering engine (React 18+) and uses efficient DOM updates. React's virtual DOM minimizes direct manipulation of the browser DOM, only updating what has changed. This results in smoother performance and less resource usage, especially for complex UIs.

Additionally, the project uses Parcel as a bundler, which provides lightning-fast development builds and hot module replacement. Parcel automatically optimizes your code and assets, so changes are reflected instantly in the browser without a full reload.

## How React Improves Performance

- **Virtual DOM:** React creates a lightweight copy of the actual DOM and only updates the parts that change, reducing unnecessary re-renders.
- **Concurrent Rendering:** React 18 introduces concurrent features, allowing React to prepare multiple UI updates in the background and apply them efficiently.
- **Efficient Bundling:** Parcel bundles and serves your files quickly, optimizing for both development and production.

## Getting Started

1. Install dependencies (if using npm):
   ```
   npm install
   ```
2. Start the development server:
   ```
   npx parcel index.html
   ```
3. Open your browser and navigate to `http://localhost:1234` (default Parcel port).

## Contributing

Feel free to fork the repository and submit pull requests. Suggestions and improvements are always welcome!

---

\*\*Enjoy exploring React and see how fast modern web development can

//TODO:
//!fdfds
//\*sdfsfd

2 type of export and import

1-default export import
---export default Componet
---import component from 'path'

2-named export import

---export const Componet
---import {component} from "path"



# 🔍 Search & Filter Logic Implementation

## 📊 State Management Structure

```javascript
const [resList, setResList] = useState([]);           // Original data (immutable after fetch)
const [filterResList, setFilterResList] = useState([]); // Filtered data for display
const [searchText, setSearchText] = useState('');       // Search input value
```

## 🎯 Core Logic Principles

### 1. **Data Flow Architecture**
```
API/Mock Data → resList (original) → Search/Filter Logic → filterResList (display) → UI
```

### 2. **State Responsibility**
- **`resList`**: Stores original data, never modified after initial fetch
- **`filterResList`**: Contains current filtered/searched results for UI display
- **`searchText`**: Controls search input and tracks current search query

## 🔧 Implementation Details

### **Search Functionality**

```javascript
const handleSearch = () => {
  if (searchText.trim() === '') {
    setFilterResList(resList); // Show all if empty
    return;
  }

  const filterRest = resList.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  setFilterResList(filterRest);
};
```

**Key Features:**
- ✅ Case-insensitive search
- ✅ Handles empty search (shows all results)
- ✅ Real-time search option available
- ✅ Always filters from original data (`resList`)

### **Filter by Rating**

```javascript
const handleTopRatedFilter = () => {
  const filterRestaurant = resList.filter(
    (res) => res.info?.avgRating > 4.5
  );
  setFilterResList(filterRestaurant);
};
```

**Key Features:**
- ✅ Filters restaurants with rating > 4.5
- ✅ Uses optional chaining for safety
- ✅ Updates display list only

### **Reset Functionality**

```javascript
const handleShowAll = () => {
  setFilterResList(resList);
  setSearchText('');
};
```

**Key Features:**
- ✅ Resets to original data
- ✅ Clears search input
- ✅ Restores full restaurant list

## ⚡ Real-time Search Implementation

```javascript
const handleSearchInputChange = (e) => {
  const value = e.target.value;
  setSearchText(value);
  
  // Optional: Search as user types
  if (value.trim() === '') {
    setFilterResList(resList);
  } else {
    const filterRest = resList.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterResList(filterRest);
  }
};
```

## 🎨 UI Enhancement Features

### **Dynamic Button Counters**
```javascript
⭐ Top Rated ({resList.filter(res => res.info?.avgRating > 4.5).length})
Show All ({resList.length})
```

### **Results Information Display**
```javascript
{searchText ? 
  `Showing ${filterResList.length} results for "${searchText}"` : 
  `Showing ${filterResList.length} restaurants`
}
```

### **Empty State Handling**
```javascript
{filterResList.length > 0 ? (
  // Show restaurant cards
) : (
  <div>No restaurants found for "{searchText}" 🔍</div>
)}
```

## 🚀 Advanced Features

### **Multiple Filter Options**
```javascript
// Fast Delivery Filter
const fastDelivery = resList.filter(
  (res) => res.info?.sla?.deliveryTime <= 30
);

// Price Range Filter
const budgetFriendly = resList.filter(
  (res) => parseInt(res.info?.costForTwo.replace(/[^0-9]/g, '')) <= 300
);
```

### **Combined Search + Filter**
```javascript
// First apply search, then filter
let results = resList;

if (searchText.trim() !== '') {
  results = results.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

if (ratingFilter) {
  results = results.filter((res) => res.info?.avgRating > 4.5);
}

setFilterResList(results);
```

## 🔍 Search Algorithm Details

### **Search Criteria**
- **Primary**: Restaurant name matching
- **Case-insensitive**: Uses `toLowerCase()`
- **Partial matching**: Uses `includes()` method
- **Trim whitespace**: Handles empty/space-only searches

### **Search Performance**
- **Time Complexity**: O(n) where n = number of restaurants
- **Space Complexity**: O(k) where k = number of matching results
- **Optimizable**: Can add debouncing for real-time search

## 🛡️ Error Handling

### **Safe Property Access**
```javascript
res.info?.avgRating > 4.5  // Uses optional chaining
res.info?.name || 'Unknown'  // Fallback values
```

### **Input Validation**
```javascript
if (searchText.trim() === '') {
  // Handle empty search
}
```

### **Data Validation**
```javascript
if (restaurants && restaurants.length > 0) {
  // Use API data
} else {
  // Fallback to mock data
}
```

## 📈 Performance Optimizations

### **Debouncing for Real-time Search**
```javascript
import { useDeferredValue } from 'react';

const deferredSearchText = useDeferredValue(searchText);

useEffect(() => {
  // Search logic here
}, [deferredSearchText]);
```

### **Memoization**
```javascript
import { useMemo } from 'react';

const filteredResults = useMemo(() => {
  return resList.filter(/* filter logic */);
}, [resList, searchText, otherFilters]);
```

## 🎯 Best Practices Implemented

1. **Separation of Concerns**: Search logic separated from UI
2. **Immutable State**: Original data never modified
3. **Single Source of Truth**: All filters work from `resList`
4. **User Feedback**: Loading states, result counts, empty states
5. **Accessibility**: Proper input labeling and keyboard navigation
6. **Error Boundaries**: Graceful fallbacks for API failures

## 🔄 Data Flow Summary

```
User Action (Search/Filter) 
    ↓
Handler Function Called
    ↓
Process Original Data (resList)
    ↓
Update Display Data (filterResList)
    ↓
UI Re-renders with New Results
```

This architecture ensures data integrity, smooth user experience, and maintainable code structure.
   