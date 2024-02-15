"use client";

import { IonHeader, IonPage, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Page(params: any) {
  const id = params.id;
  const [product, setProducts] = useState<any>(null);

  //useRef is a React Hook that let you refrence a value

  const nameRef = useRef(null);
  const buyPrice = useRef(null);
  const sellPrice = useRef(null);

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

    // formData.append('name',)
  };

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar></IonToolbar>
        </IonHeader>
      </IonPage>
    </div>
  );
}
