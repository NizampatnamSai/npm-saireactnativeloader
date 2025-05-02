import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder = "",
  type = "text", // 'text' | 'email' | 'number' | 'password'
  secureToggle = true,
  error = "",
  style = {},
  inputStyle = {},
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";
      case "number":
        return "numeric";
      default:
        return "default";
    }
  };

  const isPassword = type === "password";
  const secureTextEntry = isPassword && !showPassword;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={getKeyboardType()}
          style={[styles.input, inputStyle]}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && secureToggle && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.toggle}
          >
            <Text>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  toggle: {
    padding: 6,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
