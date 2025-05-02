// import React, { useEffect, useRef } from "react";
// import { View, Animated, StyleSheet, useColorScheme } from "react-native";

// const Skeleton = ({ width = "100%", height = 20, style }) => {
//   const opacity = useRef(new Animated.Value(0.6)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 700,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacity, {
//           toValue: 0.6,
//           duration: 700,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);

//   return (
//     <Animated.View
//       style={[
//         {
//           width,
//           height,
//           backgroundColor: "#e0e0e0",
//           borderRadius: 4,
//           opacity,
//         },
//         style,
//       ]}
//     />
//   );
// };

// const Dots = ({ size, color, speed }) => {
//   const animValues = [
//     useRef(new Animated.Value(0)).current,
//     useRef(new Animated.Value(0)).current,
//     useRef(new Animated.Value(0)).current,
//   ];

//   useEffect(() => {
//     animValues.forEach((anim, i) => {
//       Animated.loop(
//         Animated.sequence([
//           Animated.delay(i * 200),
//           Animated.timing(anim, {
//             toValue: -10,
//             duration: speed * 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(anim, {
//             toValue: 0,
//             duration: speed * 500,
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();
//     });
//   }, []);

//   return (
//     <View style={styles.dotsContainer}>
//       {animValues.map((anim, i) => (
//         <Animated.View
//           key={i}
//           style={[
//             styles.dot,
//             {
//               backgroundColor: color,
//               width: size / 5,
//               height: size / 5,
//               transform: [{ translateY: anim }],
//             },
//           ]}
//         />
//       ))}
//     </View>
//   );
// };

// const CustomLoader = ({
//   size = 40,
//   color,
//   loading = true,
//   speed = 1,
//   thickness = 4,
//   variant = "default",
//   children,
// }) => {
//   const isDark = useColorScheme() === "dark";
//   const resolvedColor = color || (isDark ? "#fff" : "dodgerblue");

//   if (!loading) return null;

//   if (variant === "dots") {
//     return (
//       <View style={styles.center}>
//         <Dots size={size} color={resolvedColor} speed={speed} />
//         {children}
//       </View>
//     );
//   }

//   if (variant === "skeleton") {
//     return <Skeleton width={size * 2} height={size / 2} />;
//   }

//   // Default spinner
//   const spinAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(spinAnim, {
//         toValue: 1,
//         duration: speed * 1000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, []);

//   const rotate = spinAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ["0deg", "360deg"],
//   });

//   return (
//     <View style={styles.center}>
//       <Animated.View
//         style={{
//           width: size,
//           height: size,
//           borderWidth: thickness,
//           borderColor: resolvedColor,
//           borderTopColor: "transparent",
//           borderRadius: size / 2,
//           transform: [{ rotate }],
//         }}
//       />
//       {children}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     gap: 4,
//   },
//   dot: {
//     borderRadius: 50,
//     marginHorizontal: 4,
//   },
// });

// export default CustomLoader;

// src/App.native.js

import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const CustomLoader = ({ size = 40, color = "dodgerblue", loading = true }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomLoader;
