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

  const handleView = async (item: any) => {
    window.location.href = "/product/view/" + item?.Id; // To See Product View
  };

  const handleEdit = async (item: any) => {
    window.location.href = "/product/view/" + item?.Id; // To See Product View;
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
                <IonButton
                  onClick={() => handleView(items)}
                  className="border border-green-800 border-x-2 border-y-2 rounded "
                >
                  View
                </IonButton>
                <IonButton
                  onClick={() => handleEdit(items)}
                  className="border border-black border-x-2 border-y-2 rounded"
                >
                  Edit
                </IonButton>
                <IonButton
                  onClick={() => handleDelete(items)}
                  className="border border-red-800 border-x-2 border-y-2 rounded"
                >
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
