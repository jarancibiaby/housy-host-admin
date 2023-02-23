import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Timestamp,
} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getUserFromCookie } from "../auth/userCookie";
import { db } from "../firebase-config";

export const getUserId = () => {
  const user: {
    id: string;
    email: string;
  } = getUserFromCookie();

  return user?.id;
};

export const postPayment = async (payment: any) => {
  payment.date = payment.date
    ? Timestamp.fromDate(
        new Date(new Date(payment.date).toUTCString().slice(0, 25))
      )
    : Timestamp.fromDate(new Date(Date.now()));
  const paymentsCollectionRef = collection(db, "payments");

  getAuth().onAuthStateChanged((user) => {
    addDoc(paymentsCollectionRef, { ...payment, uid: user?.uid });
  });
};

export const deletePayment = async (paymentId: string) => {
  const paymentsCollectionRef = doc(db, "payments", paymentId);
  return await deleteDoc(paymentsCollectionRef);
};
