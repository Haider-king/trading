// validation.js
export const validateLogin = (emailOrPhone, password) => {
  const errors = {};
  let valid = true;

  // Email / Phone validation
  if (!emailOrPhone) {
    errors.emailOrPhone = "Email or phone is required!";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailOrPhone) && !/^\d{10,15}$/.test(emailOrPhone)) {
    errors.emailOrPhone = "Invalid email or phone!";
    valid = false;
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required!";
    valid = false;
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters!";
    valid = false;
  }

  return { errors, valid };
};

export const validateRegister = (formData) => {
  const errors = {};
  let valid = true;

  // First name
  if (!formData.firstName) {
    errors.firstName = "First name is required!";
    valid = false;
  }

  // Last name
  if (!formData.lastName) {
    errors.lastName = "Last name is required!";
    valid = false;
  }

  // Username
  if (!formData.username) {
    errors.username = "Username is required!";
    valid = false;
  }

  // Email / Phone
  if (!formData.emailOrPhone) {
    errors.emailOrPhone = "Email or phone is required!";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.emailOrPhone) && !/^\d{10,15}$/.test(formData.emailOrPhone)) {
    errors.emailOrPhone = "Invalid email or phone!";
    valid = false;
  }

  // Country
  if (!formData.country) {
    errors.country = "Country is required!";
    valid = false;
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Gender is required!";
    valid = false;
  }

  // Birth date
  if (!formData.birthDate) {
    errors.birthDate = "Birth date is required!";
    valid = false;
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required!";
    valid = false;
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters!";
    valid = false;
  }

  // Password strength
  if (formData.password) {
    const strength = passwordStrength(formData.password);
    errors.passwordStrength = strength;
  }

  // Confirm password
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm password is required!";
    valid = false;
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Passwords do not match!";
    valid = false;
  }

  return { errors, valid };
};

// Password strength helper
export const passwordStrength = (password) => {
  if (!password) return null; 
  if (password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) {
    return "Excellent";
  } else if (password.length >= 10) {
    return "Good"; 
  } else if (password.length >= 8) {
    return "Weak"; 
  } else {
    return "Too short"; 
  }
};
