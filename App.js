import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import * as Speech from "expo-speech";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "./firebase";
import { db } from "./firebase";

const App = () => {
  const [ note, setNote ] = useState("");
  const { summary, setSummary} = useState("");

  // Sign-in with Google
  const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User info:", result.user);
    } catch (error) {
      console.log("Google sign-in error:", error)
    }
  }

  // Convert speech to text using expo speech
  const recordSpeech = () => {
    Speech.speak("Satrt speaking...")
  }
  
  // Saves the note to Firebase adding the item to "notes" collection
  const saveNote = async () => {
      await addDoc(collection(db, "notes"), {
        text: noteText,
        summary: summaryText,
        timestamp: new Date()
      });
      setNote("");
      setSummary("");
  }
}
