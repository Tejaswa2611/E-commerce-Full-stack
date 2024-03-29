import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product/components/ProductList";
// aayein
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