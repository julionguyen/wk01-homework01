import logo from './logo.svg';
import './App.css';
import ProductPrice from './ProductPrice';
import './ProductPrice.css';

function App() {
  return (
    <div>
      <h1>Fancy Florist</h1>
      <ProductPrice
        name="Congratulations Bouquet"
        description="The perfect bouquet for a celebration such as a birthday or graduation."
        price={70} sale={true}
        photo="https://t4.ftcdn.net/jpg/03/23/90/45/240_F_323904531_WJBg9sOcpqFTcPzJEdNR0Mp5Aflndxuz.jpg"/>
      <ProductPrice
        name="Apology Bouquet"
        description="You need something extra when you know you messed up."
        price={150}  sale={false}
        photo="https://t3.ftcdn.net/jpg/01/38/93/50/240_F_138935039_4rPHBNlEanfGpLVeX25B7jI8A8bHyqxs.jpg"/>
      <ProductPrice
        name="Wedding Bouquet"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200}  sale={true}
        photo="https://t4.ftcdn.net/jpg/01/85/39/85/240_F_185398545_GGbrJYgw65pQd2PIdXkxBRqBHfmkU8Ka.jpg"/>
    </div>  );
}

export default App;
