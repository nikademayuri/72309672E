app.get("/numbers/:numberid", async (req, res) => {
  const numberid = req.params.numberid;

  if (!validIds.includes(numberid)) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const windowPrevState = [...storedNumbers]; // copy before fetch
  const apiUrl = `${THIRD_PARTY_BASE_URL}/${numberid}`;
  
  try {
    const response = await axios.get(apiUrl, {
      timeout: 500,
      headers: {
        Authorization: "Bearer your_token_here"  // Replace this with the actual token or key
      }
    });
    const fetchedNumbers = response.data.numbers || [];

    // Filter out duplicates from storedNumbers
    const newUniqueNumbers = fetchedNumbers.filter(num => !storedNumbers.includes(num));

    // Add new unique numbers to storedNumbers
    storedNumbers = [...storedNumbers, ...newUniqueNumbers];

    // If window size exceeded, remove oldest to keep window size exactly
    if (storedNumbers.length > WINDOW_SIZE) {
      storedNumbers = storedNumbers.slice(storedNumbers.length - WINDOW_SIZE);
    }

    // Calculate average of storedNumbers rounded to 2 decimals
    const avg = storedNumbers.length > 0 
      ? Number((storedNumbers.reduce((a,b) => a + b, 0) / storedNumbers.length).toFixed(2)) 
      : 0;

    const result = {
      windowPrevState,
      windowCurrState: storedNumbers,
      numbers: fetchedNumbers,
      avg
    };

    return res.json(result);
  } catch (err) {
    // Handle error or timeout
    const avg = storedNumbers.length > 0 
      ? Number((storedNumbers.reduce((a,b) => a + b, 0) / storedNumbers.length).toFixed(2)) 
      : 0;

    return res.json({
      windowPrevState,
      windowCurrState: storedNumbers,
      numbers: [],
      avg,
      error: "Failed to fetch from 3rd party server or timeout"
    });
  }
});
