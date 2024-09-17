import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard id={0} name="Чизбургер-пицца" price={550} imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif" /> */}
              <ProductsGroupList
                title="Пицца"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
