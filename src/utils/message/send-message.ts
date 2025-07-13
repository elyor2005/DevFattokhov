import axios from "axios";

export const SendMessage = async (message: string) => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot8133520172:AAG6dQ8H0yV53ZwMN55h5mXEYzRY5AHj8zI/sendMessage`,
      {
        chat_id: -4972100698,
        text: message,
        parse_mode: "HTML",
      }
    );

    console.log("✅ Message sent:", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "❌ Failed to send Telegram message:",
        error.response?.data || error.message
      );
    } else {
      console.error("❌ Unknown error:", error);
    }
    throw error;
  }
};
