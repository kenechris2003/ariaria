"use server"

// Create a module-level Map to store OTPs
const otpStore = new Map()

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Function to send OTP (mock implementation)
export async function sendOTP(email: string) {
  try {
    // Generate a 6-digit OTP
    const otp = generateOTP()

    // Store OTP in the module-level Map
    otpStore.set(email, {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes expiry
    })

    // Log the OTP to the console for testing purposes
    console.log(`[MOCK EMAIL] OTP for ${email}: ${otp}`)

    // Return success with the mock OTP for display in the UI
    return {
      success: true,
      mockOtp: otp,
    }
  } catch (error) {
    console.error("Error generating OTP:", error)
    return {
      success: false,
      message: "Failed to generate verification code. Please try again.",
    }
  }
}

// Function to verify OTP
export async function verifyOTP(email: string, userOtp: string) {
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
