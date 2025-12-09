require("dotenv").config();
const mqtt = require("mqtt");

const client = mqtt.connect(process.env.MQTT_BROKER, {
    clean: false,
    clientId: "backend-receiver-01",
    rejectUnauthorized: false
});

client.on("connect", () => {
  console.log("✅ Receiver connected to MQTT");

  client.subscribe(process.env.SENSOR1_TEMP);
  client.subscribe(process.env.SENSOR1_HUMID);

  console.log("📡 Subscribed to sensor topics");
});

client.on("message", (topic, msg) => {
  console.log(`📥 [${topic}]:`, msg.toString());
});
