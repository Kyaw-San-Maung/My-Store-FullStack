"use client";

import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await axios.get("/product/api/" + id).then((res: any) => {
      console.log("Product Data is", res.data[0]);
      setProduct(res.data[0]);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>{product?.Name}</h1>
        <p>Buy Price : {product?.BuyPrice}</p>
        <p>Sell Price : {product?.SellPrice}</p>

        <IonItem lines="none">
          <h2>{product?.Name}</h2>
        </IonItem>
        <IonCard>
          <IonCardContent>
            <p>Buy Price : {product?.BuyPrice}</p>
            <p>Sell Price : {product?.SellPrice}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
