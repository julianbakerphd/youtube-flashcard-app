import * as React from 'react';
import { View } from 'react-native'
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
} from '@react-navigation/native';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux'

function BottomTabNavigator({
  initialRouteName,
  backBehavior,
  children,
  screenOptions,
  flashcardPanelHeight,
  ...rest
  
}) {
  const { state, descriptors, navigation } = useNavigationBuilder(TabRouter, {
    initialRouteName,
    backBehavior,
    children,
    screenOptions,
  });
  return (
    <View style={{flex: 1}}>
    <BottomTabView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
    <View style={[{height: 40, width: '100%', backgroundColor: 'orange', position: 'absolute', bottom: 0, left: 0}, {height: flashcardPanelHeight}]}>

    </View>
    </View>
  );
}
const mapStateToProps = (state) => {

    return{ flashcardPanelHeight: state.flashcardPanelHeight}
}
export default  createNavigatorFactory(connect(mapStateToProps)(BottomTabNavigator))

