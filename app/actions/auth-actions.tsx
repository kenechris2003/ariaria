"use server"

import { createTransport } from "nodemailer"

// Create a module-level Map to store OTPs
// Note: This is reset when the server restarts or when deployed
// For production, use a database instead
const otpStore = new Map()

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Function to send OTP via email
export async function sendOTP(email: string) {
  try {
    // Generate a 6-digit OTP
    const otp = generateOTP()

    // Store OTP in the module-level Map
    otpStore.set(email, {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes expiry
    })

    // Try to send email with OTP
    try {
      // Configure email transporter
      const transporter = createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: Number.parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        // Add timeout to prevent long hanging connections
        connectionTimeout: 10000, // 10 seconds
      })

      // Send email with OTP
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Ariaria Support" <support@ariaria.com>',
        to: email,
        subject: "Password Reset OTP",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="cid:logo" alt="Ariaria Logo" style="max-width: 150px;">
            </div>
            <h2 style="color: #333; text-align: center;">Password Reset</h2>
            <p style="color: #666; font-size: 16px;">We received a request to reset your password. Please use the following code to verify your identity:</p>
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; margin: 20px 0; border-radius: 5px;">
              <span style="font-size: 24px; font-weight: bold; letter-spacing: 5px;">${otp}</span>
            </div>
            <p style="color: #666; font-size: 14px;">This code will expire in 10 minutes. If you didn't request a password reset, please ignore this email.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>© ${new Date().getFullYear()} Ariaria. All rights reserved.</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: "logo.png",
            path: process.env.LOGO_PATH || "./public/ariaria_logo.png",
            cid: "logo",
          },
        ],
      })

      console.log(`Email sent successfully to ${email}`)
      return { success: true }
    } catch (emailError) {
      console.error("Error sending email:", emailError)

      // For development/testing: Return success with the OTP for testing
      // In production, you would want to return an error instead
      if (process.env.NODE_ENV !== "production") {
        console.log(`[DEVELOPMENT MODE] OTP for ${email}: ${otp}`)
        return {
          success: true,
          mockOtp: otp,
          emailError: true,
          message: "Email could not be sent, but OTP was generated for testing purposes.",
        }
      }

      // In production, return an error
      throw emailError
    }
  } catch (error) {
    console.error("Error in sendOTP:", error)
    return {
      success: false,
      message: "Failed to send verification code. Please try again.",
    }
  }
}

// Function to verify OTP
export async function verifyOTP(email: any, userOtp: any) {
  try {
    // Get stored OTP data from the module-level Map
    const otpData = otpStore.get(email)

    if (!otpData) {
      return {
        success: false,
        message: "Verification code has expired or doesn't exist. Please request a new one.",
      }
    }

    // Check if OTP has expired
    if (Date.now() > otpData.expiresAt) {
      otpStore.delete(email)
      return {
        success: false,
        message: "Verification code has expired. Please request a new one.",
      }
    }

    // Verify OTP
    if (otpData.otp === userOtp) {
      // OTP verified successfully, clean up
      otpStore.delete(email)
      return { success: true }
    } else {
      return {
        success: false,
        message: "Invalid verification code. Please try again.",
      }
    }
  } catch (error) {
    console.error("Error verifying OTP:", error)
    return {
      success: false,
      message: "An error occurred. Please try again.",
    }
  }
}
