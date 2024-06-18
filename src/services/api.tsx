export async function httpRequest(url: string, data?: any):Promise<{ data:any }> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const concatenatedURL = baseURL + url;
  
  try {
    const response = await fetch(concatenatedURL, {
      method: data ? "POST" : "GET",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();
    return { data: responseData, status: response.status };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
