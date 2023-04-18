# Recipefy Mobile

Recipefy Mobile is a mobile version app from the original Recipefy (website) where users can find listed recipes by data that has been premade (on database), or create their
own recipes and share it with another user. This mobile app was made with React Native, React Context, Axios, Redux, Node JS (Front-end) || Express JS, and PostgreSQL (Back-end)


## Packages.json Build dependencies (Node JS)
```bash
    "dependencies": {
    "@react-native-async-storage/async-storage": "^1.18.1",
    "@react-native-picker/picker": "^2.4.9",
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@react-navigation/stack": "^6.3.16",
    "axios": "^1.3.4",
    "react": "18.1.0",
    "react-native": "0.70.6",
    "react-native-dotenv": "^3.4.8",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-image-picker": "^5.3.1",
    "react-native-linear-gradient": "^2.6.2",
    "react-native-onesignal": "^4.5.1",
    "react-native-reanimated": "^2.14.4",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.20.0",
    "react-native-vector-icons": "^9.2.0",
    "react-redux": "^8.0.5",
    "react-router-native": "^6.10.0",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.2",
    "start-android-emulator": "^2.0.0"
  },
```
## Releases
Released as AAB and APK file using ./gradlew bundleRelease (AAB) && ./gradlew assembleRelease (APK)
#### Release AAB
- [AAB](https://github.com/yosuanovry/FoodRecipeApp/tree/master/releaseBuild/AAB)
#### Release APK
- [APK](https://github.com/yosuanovry/FoodRecipeApp/tree/master/releaseBuild/APK)

## Authors
- [yosuanovry](https://github.com/yosuanovry)

## UI Screens

| Splash Screen                                                | Login Screen                                              | Register Screen                                              |Forgot Password Screen                                              |
| --------------------------------------------------------- | --------------------------------------------------------- |--------------------------------------------------------- |--------------------------------------------------------- |
| ![Splash](/PagesScreenCapture/SplashScreen.PNG ) | ![Login](/PagesScreenCapture/Login.PNG) | ![Register](/PagesScreenCapture/Register.PNG) | ![Forgot Password](/PagesScreenCapture/ForgotPassword.PNG) |

| Home Screen                                                  | Search Screen                                             | Detail Screen                                         | User Recipes Screen                                              |
| --------------------------------------------------------- | --------------------------------------------------------- |--------------------------------------------------------- |--------------------------------------------------------- |
| ![Home](/PagesScreenCapture/Home.PNG ) | ![Search](/PagesScreenCapture/SearchRecipes.PNG) | ![Detail Recipes](/PagesScreenCapture/RecipeDetail.PNG) | ![User Recipes](/PagesScreenCapture/UserRecipe.PNG) |

| Add Recipe Screen                                                  | Update Recipe Screen                                              | User Profile Screen                                        | Edit User Profile Screen                                         |
| --------------------------------------------------------- | --------------------------------------------------------- |--------------------------------------------------------- |--------------------------------------------------------- |
| ![Add Recipe](/PagesScreenCapture/AddRecipes.PNG ) | ![Update Recipe](/PagesScreenCapture/EditRecipes.PNG) | ![User Profile](/PagesScreenCapture/Profile.PNG) | ![Edit User Profile](/PagesScreenCapture/EditProfile.PNG)

| Verification Screen                                              
| --------------------------------------------------------- |
| ![Register Verification](/PagesScreenCapture/Verification.PNG ) | 
