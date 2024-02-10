"use client";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get("/product/api").then((res: any) => {
      console.log("Product Data is = ", res.data);
      setProducts(res.data);
    });
  };

  const handleDelete = async (item: any) => {
    console.log("Hi, This is delete");

    await axios.delete("product/api/" + item?.Id).then((res) => {
      console.log("Delete Respone : ", res.data);
      getProduct();
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Product List</IonTitle>
      </IonHeader>
      <IonContent>
        {products.map((items: any) => {
          return (
            <IonItem key={items.Id}>
              {items?.Name}
              <IonButtons slot="end">
                <IonButton onClick={() => handleDelete(items)}>
                  Delete
                </IonButton>
              </IonButtons>
            </IonItem>
          );
        })}
      </IonContent>
    </IonPage>
  );
}
