import Contact from "../models/Contact.js"

export const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, message } = req.body

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const newContact = await Contact.create({
      fullName,
      email,
      message
    })

    res.status(201).json({
      success: true,
      data: newContact
    })
  }catch (error) {
  console.error(error)
  res.status(500).json({
    success: false,
    message: "Server Error"
  })
}

  }

