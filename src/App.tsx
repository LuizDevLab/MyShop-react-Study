import { Provider } from "react-redux";
import { Header } from "./components/Header/Header_temp";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./Redux/store";

// componente funcional do React
function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductsList />
      <GlobalStyles/>
    </Provider>
  );
}

export default App;
