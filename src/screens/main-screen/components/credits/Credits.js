import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase";

const Credits = () => {
  const [writers, setWriters] = useState("");

  const creditsWriters = async () => {
    let string = "";

    const snapshot = await db.collection("credits").get();

    snapshot.forEach((doc) => (string = string + doc.data().name + ", "));

    setWriters(string.substring(0, string.length - 2));
  };

  useEffect(() => {
    creditsWriters();
  }, []);

  return (
    <div>
      <hr />
      <p>
        Thanks to my friends, the devs, and the discord channel for looking at
        this while i was developing this
      </p>
      <p>Website created by Archanist!</p>
      <p>Special thanks to tip writers: {writers}</p>
    </div>
  );
};

export default Credits;
