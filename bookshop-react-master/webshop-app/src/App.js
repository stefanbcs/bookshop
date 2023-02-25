import "./App.css";
import { BrowserRouter } from "react-router-dom";

import BookstoreRoutes from "./components/BookstoreRoutes";

function App() {
    return (
        <BrowserRouter>
            <BookstoreRoutes />
        </BrowserRouter>
    );
}

export default App;
