// import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import NavBar from "../features/navbar/Navbar";

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