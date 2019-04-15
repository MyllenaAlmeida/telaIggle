import { createStackNavigator } from "react-navigation"
import Signup from "./pages/signup";

export default createStackNavigator ({
    Signup,
}, {
    navigationOptions: {
      headerStyle: { backgroundColor: "#3CB371" },
      headerTintColor: "#FFF"
    },
});
