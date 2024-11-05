"use server";

interface ShortenUrlResponse {
  result_url: string;
  error?: string;
}

export async function shortenUrl(url: string): Promise<ShortenUrlResponse> {
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      body: `url=${url}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to shorten URL:", error);
    throw error;
  }
}
