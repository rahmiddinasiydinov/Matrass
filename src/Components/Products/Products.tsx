import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Products.scss';
import { Cards } from "../Card/Card";

import { CircularProgress } from "@mui/material";



function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//INTERFACES
 interface Icategory{
  model: string, 
  isActive: boolean, 
  isDelete: boolean, 
  createdAt: string, 
  updatedAt: string, 
  id:number
}
export  interface IProduct{
  capacity: string, 
  categoryId: number, 
  description: string,
  discount_price: number, 
  id: number, 
  img: string[], 
  isDiscount: boolean, 
  isNew: boolean, 
  price: number, 
  size: string, 
  title: string,
  updatedAt: string, 
  warranty: number, 
  yuklama:number
}

export default function Products() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState<IProduct[] | null>(null);
  const [discount, setDiscount] = React.useState<IProduct[] | null>(null);
  const [category, setCategory] = React.useState<Icategory[] | null>(null);
  const [currentCat, setCurrentCut] = React.useState<number | null>(null);
  const [pending, setpending] = React.useState<boolean>(true);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
  };
  React.useEffect(() => {
    fetch("https://matrassesapp.herokuapp.com/api/category")
      .then(res => res.json())
      .then(data => {
        setCategory(data);
        setCurrentCut(data[0]?.id);
      });
  }, []);
  React.useEffect(() => {
    fetch(`https://matrassesapp.herokuapp.com/api/product`)
      .then(res => res.json())
      .then(data => {
        setpending(false)
        console.log(data);
        console.log(currentCat);
        setDiscount([...data.filter((e:IProduct)=>e.isDiscount)])
        if (currentCat || currentCat===0) {
          setData([...data.filter((e:IProduct)=>e.categoryId==currentCat)])
        } else {
          setData(data);
        }
      });
  }, [currentCat]);

  return (
    <Box sx={{ width: "100%" }} id="products">
      <h2 className="products__title">Bizning mahsulotlar</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="xl">
          {" "}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="products__list"
            sx={{ color: "#01384D" }}
          >
            {category?.map((e: any, i: any) => {
              return (
                <Tab
                  key={i}
                  className="product__tab"
                  label={e.model}
                  {...a11yProps(e.id)}
                  onClick={() => {
                    setCurrentCut(e.id);
                  }}
                />
              );
            })}
          </Tabs>
        </Container>
      </Box>
      <div className="container">
        {/* <TabPanel   value={value} index={0}>
          {arr.map((e, i) => {
            return(<Cards key={i}/>)
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
        <div
          className={`products__pending ${
            !pending ? "products__pending--disabled" : ""
          }`}
        >
          <CircularProgress color="inherit" size={50} />
        </div>
        {!pending && data?.length === 0 ? (
          <span className="products__notfound">
            Kechirasiz, bu modelda Mahsulot qolmadi.
          </span>
        ) : (
          data?.map((e: IProduct, i) => {
            return (
              <Cards
                key={i}
                capacity={e.capacity}
                categoryId={e.categoryId}
                description={e.description}
                discount_price={e.discount_price}
                id={e.id}
                img={e.img}
                isNew={e.isNew}
                size={e.size}
                price={e.price}
                title={e.title}
                isDiscount={e.isDiscount}
                updatedAt={e.updatedAt}
                warranty={e.warranty}
                yuklama={e.yuklama}
              />
            );
          })
        )}
      </div>
      <div className="container">
        <h2 className="products__discount">Aksiyadagi mahsulotlar</h2>
        {discount?.map((e: IProduct, i) => {
          return (
            <Cards
              key={i}
              capacity={e.capacity}
              categoryId={e.categoryId}
              description={e.description}
              discount_price={e.discount_price}
              id={e.id}
              img={e.img}
              isNew={e.isNew}
              size={e.size}
              price={e.price}
              title={e.title}
              isDiscount={e.isDiscount}
              updatedAt={e.updatedAt}
              warranty={e.warranty}
              yuklama={e.yuklama}
            />
          );
        })}
      </div>
    </Box>
  );
}
