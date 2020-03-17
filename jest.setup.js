import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-vector-icons/MaterialCommunityIcons', ()=> {});
jest.mock('@react-native-community/geolocation', () =>{});

jest.mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
      State: {},
      ScrollView: View,
      TextInput: View,
      ToolbarAndroid: View,
      ViewPagerAndroid: View,
      WebView: View,
      NativeViewGestureHandler: View,
      TapGestureHandler: View,
      FlatList: View,
      gestureHandlerRootHOC: jest.fn(),
      Directions: {},
    };
});
