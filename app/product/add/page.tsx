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
import React, { useRef } from "react";

export default function page() {
  const nameRef = useRef<null>;
  const buyPriceRef = useRef<null>;
  const sellPriceRef = useRef<null>;

  const handleSave = async () => {};

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonToolbar>
              <IonTitle>Add Product</IonTitle>
              <IonButtons>
                <IonButton onClick={handleSave}>Save</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonInput
              type="text"
              label="Name"
              labelPlacement="stacked"
              placeholder="Name"
              ref={nameRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="number"
              label="Buy Price"
              labelPlacement="stacked"
              placeholder="Buy Price"
              ref={buyPriceRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="number"
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
