import NavBar from "../features/Navbar/navbar";
import ProductList from "../features/product-list/productList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;