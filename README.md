<h1 align="center">Recipefy Mobile</h1>
<br />
<div align="center">
   
   <img src="https://github.com/yosuanovry/Recipefy-Mobile/blob/master/src/Assets/Auth/barbecue1.png?raw=true" alt="Recipefy" width="20%">
    
  <h3 align="center">Recipefy Mobile App</h3>

  <p align="center">
    <a href="https://github.com/yosuanovry/Recipefy-Mobile/issues">Report Bug</a>
    ·
    <a href="https://github.com/yosuanovry/Recipefy-Mobile/issues">Request Feature</a>
  </p>
</div>

Recipefy Mobile is a mobile version app from the original [Recipefy](https://github.com/yosuanovry/Recipefy_FE_REACT) website app where users can find listed recipes by data that has been premade (on database), or create their own recipes and share it with another user. 
<br />
<br />
**This mobile app was made with React Native, React Context, Axios, Redux, Node JS, Express JS, and PostgreSQL**.


## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
      <li>
      <a href="#releases">Releases</a>
      <ul>
        <li><a href="#release-aab">Release AAB</a></li>
        <li><a href="#release-apk">Release APK</a></li>
      </ul>
    </li>
    <li><a href="#ui-screens">UI Screens</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#developer">Developer</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [Node JS](https://nodejs.org/en/download/)
- [Android Studio Emulator](https://developer.android.com/studio)

## Installation
If you want to run this project locally, I recommend you to configure the [backend](https://github.com/yosuanovry/Ankasafy_BE) first before going into this frontend repository.

- Clone this repository

```
git clone https://github.com/yosuanovry/Recipefy-Mobile.git
```

- Go to the cloned repository folder

```
cd Recipefy-Mobile
```

- Install the required modules in the packages.json

```
npm i &/ npm install
```

- Setting up the .env file

```
REACT_APP_BASE_URL= #URL
ONESIGNAL_APP_ID= #ONESIGNALAPPID
REST_API_KEY= #RESTAPIKEY
```

- Run gradlew clean

```
npm run gradlew
```

- Run the project

```
npm run android
```

## Releases
Released as AAB and APK file using ./gradlew bundleRelease (AAB) && ./gradlew assembleRelease (APK)

#### Release AAB
- [AAB](https://github.com/yosuanovry/FoodRecipeApp/tree/master/releaseBuild/AAB)

#### Release APK
- [APK](https://github.com/yosuanovry/FoodRecipeApp/tree/master/releaseBuild/APK)


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

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Developer

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/yosuanovry">
          <img width="100" src="https://avatars.githubusercontent.com/u/123917032?v=4" alt="Yosua"><br/>
          <sub><b>Yosua Novry Susilo </b></sub> <br/>
        </a>
      </td>
  </table>
</center>

## License

Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
