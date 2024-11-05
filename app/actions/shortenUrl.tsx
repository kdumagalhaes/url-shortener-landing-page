"use server";

interface ShortenUrlResponse {
  result_url: string;
  error?: string;
}

/**
 * The function `shortenUrl` takes a URL as input, sends a POST request to a URL shortening API, and
 * returns the shortened URL response asynchronously.
 * @param {string} url - The `shortenUrl` function you provided is an asynchronous function that takes
 * a URL as a parameter and sends a POST request to the cleanuri.com API to shorten the URL. If the
 * request is successful, it returns the shortened URL data.
 * @returns The `shortenUrl` function returns a Promise that resolves to a `ShortenUrlResponse` object.
 */
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
