const GETFORM_ENDPOINT = "https://getform.io/f/akkpxgpa";

function validateEmail(value) {
  if (typeof value !== "string") {
    return false;
  }
  return /.+@.+\..+/.test(value.trim());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { name, email, message, _gotcha = "", ...rest } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({
        message:
          "Compila tutti i campi obbligatori (nome, email e messaggio) prima di inviare.",
      });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Indirizzo email non valido." });
  }

  const payload = new URLSearchParams();
  payload.append("name", name);
  payload.append("email", email);
  payload.append("message", message);
  payload.append("_gotcha", _gotcha);

  Object.entries(rest).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((item) => payload.append(key, item));
      } else {
        payload.append(key, String(value));
      }
    }
  });

  try {
    const response = await fetch(GETFORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: payload.toString(),
    });

    if (!response.ok) {
      const detail = await response.text();
      return res.status(502).json({
        message:
          "Impossibile inoltrare il messaggio a Getform. Riprova più tardi o contattaci via email.",
        detail,
      });
    }

    return res.status(200).json({ message: "Messaggio inviato correttamente." });
  } catch (error) {
    return res.status(502).json({
      message:
        "Si è verificato un errore di rete durante l'inoltro del messaggio.",
      detail: error.message,
    });
  }
}
