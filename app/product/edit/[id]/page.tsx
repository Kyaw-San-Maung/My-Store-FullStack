"use client";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [product, setProducts] = useState<any>(null);

  //useRef is a React Hook that let you refrence a value

  const nameRef = useRef<HTMLIonInputElement>(null);
  const buyPriceRef = useRef<HTMLIonInputElement>(null);
  const sellPriceRef = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await axios.get("/product/api/" + id).then((res) => {
      console.log("Product Data" + res.data[0]);
      setProducts(res.data[0]);
    });
  };

  const handleSave = async () => {
    const formData = new FormData();

    formData.append("name", nameRef.current?.value?.toString() || "");
    formData.append("buyPrice", buyPriceRef.current?.value?.toString() || "");
    formData.append(
      "sellPrice",
      sellPriceRef.current?.value?.toLocaleString() || ""
    );
    formData.append("id", id.toString());

    await axios.patch("/product/api", formData).then((res) => {
      console.log("Product Update Response", res.data);

      window.location.href = "/product";
    });
  };

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Page</IonTitle>
            <IonButtons slot="end">
              <IonButton expand="block" onClick={() => handleSave()}>
                Save
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonInput
              value={product?.Name}
              label="Name"
              labelPlacement="stacked"
              placeholder="Name"
              ref={nameRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={product?.BuyPrice}
              label="Buy Price"
              labelPlacement="stacked"
              placeholder="Buy Price"
              ref={buyPriceRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={product?.SellPrice}
              label="Sell Price"
              labelPlacement="stacked"
              placeholder="Sell Price"
              ref={sellPriceRef}
            ></IonInput>
          </IonItem>
        </IonContent>
      </IonPage>
    </div>
  );
}
